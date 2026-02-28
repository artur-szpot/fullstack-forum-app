import { ForumPreview } from "./Forum";

export interface Category {
  id: string;
  name: string;
  order: number;
  forums: ForumPreview[];
}
