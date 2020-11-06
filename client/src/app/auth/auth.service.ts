import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ApolloBoost, { gql } from "apollo-boost";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { DeveloperLoginInput } from "../model/auth/developer-login-input.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public client;
  private userId: string;
  private token: string;
  private isUserLoggedIn: boolean;
  private tokenTimer: NodeJS.Timer;
  private userCategory: string;

  private backEndUrl = environment.backEndUrl;

  private authStatusListenner = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) {
    this.client = new ApolloBoost({
      uri: this.backEndUrl,
    });
  }

  getAuthStatusListener() {
    return this.authStatusListenner;
  }

  public loginDeveloper(developerLoginInput: DeveloperLoginInput) {
    const loginDeveloper = gql`
      query {
        loginDeveloper(
          data: { email: "${developerLoginInput.email}", password: "${developerLoginInput.password}" }
        ) {
          _id
          token
          expiresIn
        }
      }
    `;

    // const loginDeveloper = `
    //   query {
    //     loginDeveloper(
    //       data: { email: "${developerLoginInput.email}", password: "${developerLoginInput.password}" }
    //     ) {
    //       _id
    //       token
    //       expiresIn
    //     }
    //   }
    // `;

    /*this.http
      .post(this.backEndUrl, { query: loginDeveloper })
      .subscribe((res) => {
        console.log(res);
      });*/

    this.client
      .query({ query: loginDeveloper })
      .then((res) => {
        console.log(res);
        const expiresIn = res["data"].loginDeveloper.expiresIn;
        const userId = res["data"].loginDeveloper._id;
        const token = res["data"].loginDeveloper.token;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);
        this.saveAuthData(token, expirationDate, userId, "developer");
        this.setAuthTimer(expiresIn);
        this.router.navigateByUrl("admin/admin-home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    userId: string,
    userCategory: string
  ) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userCategory", userCategory);
    localStorage.setItem("expirationDate", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userCategory");
    localStorage.removeItem("expirationDate");
  }

  private setAuthTimer(expiresIn: number) {
    this.tokenTimer = setTimeout(() => {
      this.logOutUser();
    }, expiresIn * 1000);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (authInformation) {
      const now = new Date();
      const expiresIn =
        new Date(authInformation.expirationDate).getTime() - now.getTime();
      if (expiresIn > 0) {
        this.token = authInformation.token;
        this.userId = authInformation.userId;
        this.isUserLoggedIn = true;
        this.userCategory = authInformation.userCategory;
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListenner.next(true);
      }
    }
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userCategory = localStorage.getItem("userCategory");
    const expirationDate = localStorage.getItem("expirationDate");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      userId: userId,
      userCategory: userCategory,
      expirationDate: expirationDate,
    };
  }

  logOutUser() {
    this.token = null;
    this.isUserLoggedIn = false;
    this.authStatusListenner.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.userId = null;
    this.userCategory = null;
    this.router.navigateByUrl("/");
  }

  isUserAuth() {
    return this.isUserLoggedIn;
  }

  getToken() {
    return this.token;
  }

  getUserCategory() {
    return this.userCategory;
  }

  getUserId() {
    return this.userId;
  }
}
