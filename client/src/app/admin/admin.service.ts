import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ApolloBoost, { gql } from "apollo-boost";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { Member } from "../model/member.model";
import { PollData } from "../model/poll-data.model";
import { PollResult } from "../model/poll-result.model";
import { Position } from "../model/position.model";

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
  private pollData: PollData;
  private membersListenner = new Subject<{
    second: Member[];
    third: Member[];
    fourth: Member[];
  }>();
  private pollDataListenner = new Subject<PollData>();

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

  getPollDataListener() {
    return this.pollDataListenner;
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

  enableFirstPoll(pollData: PollData) {
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
        pollData.is_first_poll_enabled = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  disableFirstPoll(pollData: PollData) {
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
        pollData.is_first_poll_enabled = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  enableSecondPoll(pollData: PollData) {
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
        pollData.is_second_poll_enabled = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  disableSecondPoll(pollData: PollData) {
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
        pollData.is_second_poll_enabled = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getFirstPollResult(pollCount: number) {
    const getFirstPollAllResult = gql`
      query {
        getFirstPollAllResult {
          position {
            _id
            title
          }
          eligible_member_infos {
            member {
              _id
              name
              year
              eligible_for {
                _id
              }
            }
            vote_recieved
          }
        }
      }
    `;

    const getSecondPollAllResult = gql`
      query {
        getSecondPollAllResult {
          position {
            title
          }
          eligible_member_infos {
            member {
              _id
              name
              year
              eligible_for {
                _id
              }
            }
            vote_recieved
          }
        }
      }
    `;

    this.client
      .query({
        query: pollCount == 1 ? getFirstPollAllResult : getSecondPollAllResult,
      })
      .then((res) => {
        this.pollResults =
          pollCount == 1
            ? res["data"].getFirstPollAllResult
            : res["data"].getSecondPollAllResult;
        console.log({ getAllPollResult: this.pollResults });
        this.pollResultsListenner.next(this.pollResults);
      });
  }

  makeAMemberEligible(_id: string, position: Position) {
    const makeAMemberEligible = gql`
      mutation {
        makeAMemberEligible(_id: "${_id}", position: "${position._id}") {
          msg
        }
      }
    `;

    this.client.mutate({ mutation: makeAMemberEligible }).then((res) => {
      console.log({ makeAMemberEligible: res["data"].makeAMemberEligible });

      this.pollResults = this.pollResults.map((pollResult) => {
        return {
          ...pollResult,
          eligible_member_infos: pollResult.eligible_member_infos.map(
            (member_info) => {
              if (member_info.member._id === _id) {
                return {
                  ...member_info,
                  member: {
                    ...member_info.member,
                    eligible_for: [
                      ...member_info.member.eligible_for,
                      position,
                    ],
                  },
                };
              }
              return member_info;
            }
          ),
        };
      });

      console.log({ getAllPollResult: this.pollResults });
      this.pollResultsListenner.next([...this.pollResults]);
    });
  }

  makeAMemberNotEligible(_id: string, position: Position) {
    const makeAMemberNotEligible = gql`
      mutation {
        makeAMemberNotEligible(_id: "${_id}", position: "${position._id}" ) {
          msg
        }
      }
    `;

    this.client.mutate({ mutation: makeAMemberNotEligible }).then((res) => {
      console.log({
        makeAMemberNotEligible: res["data"].makeAMemberNotEligible,
      });

      this.pollResults = this.pollResults.map((pollResult) => {
        return {
          ...pollResult,
          eligible_member_infos: pollResult.eligible_member_infos.map(
            (member_info) => {
              if (member_info.member._id === _id) {
                return {
                  ...member_info,
                  member: {
                    ...member_info.member,
                    eligible_for: [
                      ...member_info.member.eligible_for.filter(
                        (pPosition) => pPosition._id !== position._id
                      ),
                    ],
                  },
                };
              }
              return member_info;
            }
          ),
        };
      });

      console.log({ getAllPollResult: this.pollResults });
      this.pollResultsListenner.next([...this.pollResults]);
    });
  }

  getPollData() {
    const getPollData = gql`
      query {
        getPollData {
          is_first_poll_enabled
          is_second_poll_enabled
        }
      }
    `;

    this.client.query({ query: getPollData }).then((res) => {
      console.log({ getPollData: res["data"].getPollData });
      this.pollData = res["data"].getPollData;
      this.pollDataListenner.next(this.pollData);
    });
  }
}
