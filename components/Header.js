import haaderStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={haaderStyle.title}>
        <span>Twitter</span> Handler
      </h1>
      <p className={haaderStyle.description}>
        Enter @handle to get their tweets
      </p>
    </div>
  );
};

export default Header;
