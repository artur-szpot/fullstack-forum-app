import { BrowserRouter, Route, Routes } from "react-router";
import { AdminView } from "./routes/admin/AdminView";
import { BoardView } from "./routes/board/BoardView";
import { CategoryView } from "./routes/board/category/CategoryView";
import { EditorView } from "./routes/board/editor/EditorView";
import { ForumView } from "./routes/board/forum/ForumView";
import { ThreadView } from "./routes/board/thread/ThreadView";
import { NotFoundView } from "./routes/error/NotFoundView";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardView />}>
          <Route path="category" element={<CategoryView />} />
          <Route path="forum" element={<ForumView />} />
          <Route path="thread" element={<ThreadView />} />
          <Route path="editor" element={<EditorView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </BrowserRouter>
  );
};
