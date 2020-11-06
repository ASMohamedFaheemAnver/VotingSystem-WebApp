import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ApolloBoost, { gql } from "apollo-boost";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { Member } from "../model/member/member.model";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private client;
  private backEndUrl = environment.backEndUrl;
  private members: Member[];
  private secondYearMembers: Member[] = [];
  private thirdYearMembers: Member[] = [];
  private fourthYearMembers: Member[] = [];
  private membersListenner = new Subject<{
    second: Member[];
    third: Member[];
    fourth: Member[];
  }>();

  constructor(private router: Router, private authService: AuthService) {
    this.client = new ApolloBoost({
      uri: this.backEndUrl,
      headers: {
        Authorization: this.authService.getToken(),
      },
    });
  }

  getMembersListener() {
    return this.membersListenner;
  }

  getAllMembers() {
    const getAllMembers = gql`
      query {
        getAllMembers {
          _id
          secret
          year
          gender
          # name
        }
      }
    `;

    this.client
      .query({ query: getAllMembers })
      .then((res) => {
        this.members = res["data"].getAllMembers;
        this.members.forEach((member) => {
          if (member.year === 4) {
            this.fourthYearMembers.push(member);
          } else if (member.year === 3) {
            this.thirdYearMembers.push(member);
          } else if (member.year === 2) {
            this.secondYearMembers.push(member);
          }
        });

        this.membersListenner.next({
          second: this.secondYearMembers,
          third: this.thirdYearMembers,
          fourth: this.fourthYearMembers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
