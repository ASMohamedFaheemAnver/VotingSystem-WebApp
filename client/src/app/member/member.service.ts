import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ApolloBoost, { gql } from "apollo-boost";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  private backEndUrl = environment.backEndUrl;
  private client;

  constructor(private router: Router, private authService: AuthService) {
    this.client = new ApolloBoost({
      uri: this.backEndUrl,
      headers: {
        Authorization: this.authService.getToken(),
      },
    });
  }

  getAllPositions() {
    const getAllPositions = gql`
      query {
        getAllPositions {
          _id
          title
          eligible_year
          eligible_gender
        }
      }
    `;

    this.client.query({ query: getAllPositions }).then((res) => {
      console.log(res);
    });
  }
}
