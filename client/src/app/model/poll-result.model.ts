import { Member } from "./member.model";
import { Position } from "./position.model";

export interface PollResult {
  eligible_member_infos: {
    member: Member;
    vote_recieved: number;
  }[];
  position: Position;
}
