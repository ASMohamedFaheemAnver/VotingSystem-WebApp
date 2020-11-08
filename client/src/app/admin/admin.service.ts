import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ApolloBoost, { gql } from "apollo-boost";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { Member } from "../model/member.model";
import { PollResult } from "../model/poll-result.model";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private client;
  private backEndUrl = environment.backEndUrl;
  private members: Member[];
  private pollResults: PollResult[];
  private secondYearMembers: Member[] = [];
  private thirdYearMembers: Member[] = [];
  private fourthYearMembers: Member[] = [];
  private membersListenner = new Subject<{
    second: Member[];
    third: Member[];
    fourth: Member[];
  }>();

  private pollResultsListenner = new Subject<PollResult[]>();

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

  getpollResultsListenner() {
    return this.pollResultsListenner;
  }

  getAllMembers() {
    console.log({ called: "getAllMembers" });
    const getAllMembers = gql`
      query {
        getAllMembers {
          _id
          secret
          year
          gender
          name
        }
      }
    `;

    this.client
      .query({ query: getAllMembers })
      .then((res) => {
        this.fourthYearMembers = [];
        this.thirdYearMembers = [];
        this.secondYearMembers = [];
        console.log({ getAllMembers: res["data"].getAllMembers });
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

  enableFirstPoll() {
    const enableFirstPoll = gql`
      mutation {
        enableFirstPoll {
          msg
        }
      }
    `;

    this.client
      .mutate({ mutation: enableFirstPoll })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  disableFirstPoll() {
    const disableFirstPoll = gql`
      mutation {
        disableFirstPoll {
          msg
        }
      }
    `;

    this.client
      .mutate({ mutation: disableFirstPoll })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  enableSecondPoll() {
    const enableSecondPoll = gql`
      mutation {
        enableSecondPoll {
          msg
        }
      }
    `;

    this.client
      .mutate({ mutation: enableSecondPoll })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  disableSecondPoll() {
    const disableSecondPoll = gql`
      mutation {
        disableSecondPoll {
          msg
        }
      }
    `;

    this.client
      .mutate({ mutation: disableSecondPoll })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getFirstPollResult() {
    const getFirstPollAllResult = gql`
      query {
        getFirstPollAllResult {
          position {
            title
          }
          eligible_member_infos {
            member {
              _id
              name
              year
              is_eligible
            }
            vote_recieved
          }
        }
      }
    `;

    this.client.query({ query: getFirstPollAllResult }).then((res) => {
      this.pollResults = res["data"].getFirstPollAllResult;
      console.log({ getFirstPollAllResult: this.pollResults });
      this.pollResultsListenner.next(this.pollResults);
    });
  }
}
