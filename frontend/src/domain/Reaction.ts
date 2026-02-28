import { User } from "./User";

export interface Reaction {
  id: string;
  created_by: User;
  created_on: Date;
  reaction_type: string;
}
