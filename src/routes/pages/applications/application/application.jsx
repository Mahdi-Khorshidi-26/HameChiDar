import { useParams } from "react-router-dom";
import ReligiousTimes from "../religiousTimes/religiousTimes";
export default function Application() {
  const params = useParams();
  return (
    <div>{params.application === "religiousTimes" && <ReligiousTimes />}</div>
  );
}
