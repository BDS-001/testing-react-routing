import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import Bluto from "./Bluto";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <Link to="/profile/popeye">popeye </Link>
      <Link to="/profile/spinach">spinach </Link>
      <Link to="/profile/bluto">bluto </Link>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : name === "bluto" ? (
        <Bluto />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
