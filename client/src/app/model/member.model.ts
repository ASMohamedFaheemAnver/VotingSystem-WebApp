import { Position } from "./position.model";

export interface Member {
  _id: string;
  secret: string;
  year: number;
  gender: string;
  name: string;
  eligible_for: Position[];
}
