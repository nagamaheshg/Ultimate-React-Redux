const Header = ({userName, profession}) => {
  return (
    <>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm {userName}, a passionate {profession}!
      </p>
    </>
  );
};

export default Header;
