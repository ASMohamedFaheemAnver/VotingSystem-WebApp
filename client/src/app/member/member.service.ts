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

  createVotes(positions: Position[]) {
    const createVotes = gql`
      mutation {
        createVotes(
          data: [
            {
              position: "${positions[0]._id}"
              to: "${positions[0].to._id}"
            }
            {
              position: "${positions[1]._id}"
              to: "${positions[1].to._id}"
            }
            {
              position: "${positions[2]._id}"
              to: "${positions[2].to._id}"
            }
            {
              position: "${positions[3]._id}"
              to: "${positions[3].to._id}"
            }
            {
              position: "${positions[4]._id}"
              to: "${positions[4].to._id}"
            }
            {
             position: "${positions[5]._id}"
              to: "${positions[5].to._id}"
            }
            {
              position: "${positions[6]._id}"
              to: "${positions[6].to._id}"
            }
          ]
        ) {
          _id
        }
      }
    `;

    this.client.mutate({ mutation: createVotes }).then((res) => {
      console.log(res);
    });
  }

  getAllMembersByPosition(position: string) {
    const getAllMembersByPosition = gql`
      query {
        getAllMembersByPosition(position: "${position}") {
          _id
          name
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
