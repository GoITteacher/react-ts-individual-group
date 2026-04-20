import css from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className={css.container}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
