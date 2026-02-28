import { Paginated } from "./Paginated";
import { Post, PostPreview } from "./Post";

interface ThreadBase {
  id: string;
  title: string;
}

interface ThreadDetails {
  sticky: boolean;
  announcement: boolean;
}

export interface ThreadInfo extends ThreadBase {
  lastPost: PostPreview;
}

export interface ThreadPreview extends ThreadBase, ThreadDetails {
  firstPost: PostPreview;
  lastPost: PostPreview;
  totalPosts: number;
}

interface Thread extends ThreadBase, ThreadDetails {
  posts: Post[];
}

export interface ThreadPaginated extends Thread, Paginated {}
