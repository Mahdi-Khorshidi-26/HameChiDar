import { Link, Outlet } from "react-router-dom";

export default function Applications() {
  return (
    <div>
      <p>this is applications page</p>
      {/* Applications list come here all of it when got clicked goes to it's own page which is application */}
      {/* for example */}
      <Link to={"religiousTimes"}>اوقات شرعی</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
}
