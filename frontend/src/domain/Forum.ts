import { Paginated } from "./Paginated";
import { ThreadInfo, ThreadPreview } from "./Thread";

interface ForumBase {
  id: string;
  name: string;
  order: number;
}

export interface ForumPreview extends ForumBase {
  lastPost: ThreadInfo;
}

interface Forum extends ForumBase {
  threads: ThreadPreview[];
}

export interface ForumPaginated extends Forum, Paginated {}
