import { Category } from "../domain/Category";
import { ForumPaginated } from "../domain/Forum";
import { ThreadPaginated } from "../domain/Thread";

export class ApiService {
  public static async getCategories(): Promise<Category[]> {
    return [];
  }

  public static async getCategory(
    categoryId: string
  ): Promise<Category | null> {
    return null;
  }

  public static async getForum(
    forumId: string
  ): Promise<ForumPaginated | null> {
    return null;
  }

  public static async getThread(
    threadId: string
  ): Promise<ThreadPaginated | null> {
    return null;
  }
}
