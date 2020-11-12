import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { Subject } from "rxjs";
import { DeveloperLoginInput } from "../model/developer-login-input.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userId: string;
  private token: string;
  private isUserLoggedIn: boolean;
  private tokenTimer: NodeJS.Timer;
  private userCategory: string;

  private authStatusListenner = new Subject<boolean>();
  private userCategoryListenner = new Subject<string>();

  constructor(
    private router: Router,
    private http: HttpClient,
    private apollo: Apollo
  ) {}

  getAuthStatusListener() {
    return this.authStatusListenner;
  }

  getUserCategoryStatusListener() {
    return this.userCategoryListenner;
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

    this.apollo.query({ query: loginDeveloper }).subscribe(
      (res) => {
        console.log(res);
        const expiresIn = res["data"]["loginDeveloper"].expiresIn;
        const userId = res["data"]["loginDeveloper"]._id;
        const token = res["data"]["loginDeveloper"].token;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);
        this.userCategory = "developer";
        this.isUserLoggedIn = true;
        this.token = token;
        this.saveAuthData(token, expirationDate, userId, this.userCategory);
        this.setAuthTimer(expiresIn);
        this.userCategoryListenner.next(this.userCategory);
        this.authStatusListenner.next(true);
        this.router.navigateByUrl("admin/admin-home");
      },
      (err) => {
        this.authStatusListenner.next(false);
        console.log(err);
      }
    );
  }

  public loginMember(secret: string) {
    const loginMember = gql`
      query {
          loginMember(data: { secret: "${secret}" }) {
            _id
            token
            expiresIn
          }
        }
    `;

    this.apollo.query({ query: loginMember }).subscribe(
      (res) => {
        console.log(res);
        const expiresIn = res["data"]["loginMember"].expiresIn;
        const userId = res["data"]["loginMember"]._id;
        const token = res["data"]["loginMember"].token;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);
        this.userCategory = "member";
        this.isUserLoggedIn = true;
        this.token = token;
        this.saveAuthData(token, expirationDate, userId, this.userCategory);
        this.setAuthTimer(expiresIn);
        this.userCategoryListenner.next(this.userCategory);
        this.authStatusListenner.next(true);
        this.router.navigateByUrl("member/member-home");
      },
      (err) => {
        console.log(err);
      }
    );
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
    if (this.userCategory === "developer") {
      this.router.navigateByUrl("/auth/admin-login");
    } else {
      this.router.navigateByUrl("/");
    }
    this.userCategory = null;
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
