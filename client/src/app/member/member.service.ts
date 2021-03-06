import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Subject } from "rxjs";
import { MemberVoteData } from "../model/member-vote-data.model";
import { Member } from "../model/member.model";
import { Position } from "../model/position.model";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  private positionsListenner = new Subject<Position[]>();
  private createVoteListenner = new Subject<boolean>();
  private membersByPositionListenner = new Subject<Member[]>();
  private memberVoteDataListenner = new Subject<MemberVoteData>();
  private memberStatusListener = new Subject<boolean>();
  private positions: Position[] = [];
  private membersByPosition: Member[] = [];
  private memberVoteData: MemberVoteData;

  constructor(private apollo: Apollo) {}

  getPositionsListener() {
    return this.positionsListenner;
  }

  getMemberStatusListener() {
    return this.memberStatusListener;
  }

  getCreateVoteListenner() {
    return this.createVoteListenner;
  }

  getMemberVoteDataListener() {
    return this.memberVoteDataListenner;
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

    this.apollo.query({ query: getAllPositions }).subscribe(
      (res) => {
        this.positions = res.data["getAllPositions"];
        console.log({ getAllPositions: this.positions });
        this.positionsListenner.next([...this.positions]);
      },
      (err) => {
        console.log(err);
        this.memberStatusListener.next(false);
      }
    );
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
            {
              position: "${positions[7]._id}"
              to: "${positions[7].to._id}"
            }
          ]
        ) {
          _id
        }
      }
    `;

    this.apollo.mutate({ mutation: createVotes }).subscribe(
      (res) => {
        console.log(res);
        this.createVoteListenner.next(true);
      },
      (err) => {
        this.createVoteListenner.next(false);
      }
    );
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

    this.apollo
      .query({ query: getAllMembersByPosition, fetchPolicy: "network-only" })
      .subscribe(
        (res) => {
          this.membersByPosition = res.data["getAllMembersByPosition"];
          console.log({ getAllMembersByPosition: this.membersByPosition });
          this.membersByPositionListenner.next([...this.membersByPosition]);
        },
        (err) => {
          console.log(err);
          this.memberStatusListener.next(false);
        }
      );
  }

  getMemberVoteData() {
    const getMemberVoteData = gql`
      query {
        getMemberVoteData {
          is_voted
          current
        }
      }
    `;

    this.apollo
      .query({ query: getMemberVoteData, fetchPolicy: "no-cache" })
      .subscribe(
        (res) => {
          this.memberVoteData = res.data["getMemberVoteData"];
          console.log({ getMemberVoteData: this.memberVoteData });
          this.memberVoteDataListenner.next(this.memberVoteData);
        },
        (err) => {
          console.log(err);
          this.memberStatusListener.next(false);
        }
      );
  }
}
