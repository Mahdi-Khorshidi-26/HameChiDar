import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      Main Page
      <Outlet />
    </div>
  );
}
