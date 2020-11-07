import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ApolloBoost, { gql } from "apollo-boost";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { Member } from "../model/member.model";
import { Position } from "../model/position.model";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  private backEndUrl = environment.backEndUrl;
  private client;
  private positionsListenner = new Subject<Position[]>();
  private membersByPositionListenner = new Subject<Member[]>();
  private positions: Position[] = [];
  private membersByPosition: Member[] = [];

  constructor(private router: Router, private authService: AuthService) {
    this.client = new ApolloBoost({
      uri: this.backEndUrl,
      headers: {
        Authorization: this.authService.getToken(),
      },
    });
  }

  getPositionsListener() {
    return this.positionsListenner;
  }

  getMembersByPositionListener() {
    return this.membersByPositionListenner;
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
      this.positions = res.data.getAllPositions;
      console.log({ getAllPositions: this.positions });
      this.positionsListenner.next([...this.positions]);
    });
  }

  createVotes() {
    const createVotes = gql`
      mutation {
        createVotes(data: []) {
          _id
        }
      }
    `;
  }

  getAllMembersByPosition(position: string) {
    const getAllMembersByPosition = gql`
      query {
        getAllMembersByPosition(position: "${position}") {
          _id
          secret
          year
          gender
        }
      }
    `;

    this.client.query({ query: getAllMembersByPosition }).then((res) => {
      this.membersByPosition = res.data.getAllMembersByPosition;
      console.log({ getAllMembersByPosition: this.membersByPosition });
      this.membersByPositionListenner.next([...this.membersByPosition]);
    });
  }
}
