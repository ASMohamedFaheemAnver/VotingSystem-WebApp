import { Member } from "./member.model";
import { Position } from "./position.model";

export interface PollResult {
  eligible_member_infos: {
    _id: String;
    name: String;
    year: Number;
    received_votes: Number;
    eligible_for: Position[];
  }[];
  position: Position;
}
