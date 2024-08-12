import { Link } from "react-router-dom";

const Bluto = () => {
  return (
    <>
      <p>Hi, I am Bluto! i will beat <Link to='/profile/popeye'>Popeye</Link>!</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default Bluto;
