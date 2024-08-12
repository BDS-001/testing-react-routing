import { Link } from "react-router-dom";

const Popeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat <Link to='/profile/spinach'>Spinach</Link>!</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default Popeye;
