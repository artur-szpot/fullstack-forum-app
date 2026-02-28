import { Outlet } from "react-router";

export const BoardView = () => {
  return (
    <>
      <div className="container">
        <img src="" alt="Boards logo" />
        <div className="board-name">
          <h1>Boards name</h1>
          <p>Boards description</p>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
      <div className="container">
        <h1>This will be the footer</h1>
      </div>
    </>
  );
};
