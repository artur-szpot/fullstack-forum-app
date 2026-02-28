import { Reaction } from "./Reaction";
import { User } from "./User";

interface PostBase {
  id: string;
  created_by: User;
  created_on: Date;
}

export interface PostPreview extends PostBase {}

export interface Post extends PostBase {
  content: string;
  total_edits: number;
  last_edited_by?: User;
  last_edited_on?: Date;
  reactions: Reaction[];
}
