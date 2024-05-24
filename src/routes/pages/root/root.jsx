import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      This is Root layout
      <br />
      <Link to={"applications"}>applications</Link>
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
}
