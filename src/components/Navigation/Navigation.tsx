import css from "./Navigation.module.css";
import NavLink from "./NavLink/NavLink";

interface NavigationProps {}

const arr = [
  { name: "Contacts", url: "#contacts" },
  { name: "Portfolio", url: "#portfolio" },
];

const Navigation = ({}: NavigationProps) => {
  return (
    <div className={css["navigation"]}>
      {/* <NavLink name="Portfolio" url="#portfolio" />
      <NavLink name="Contacts" url="#contacts" />
      <NavLink name="Portfolio" url="#portfolio" />
      <NavLink name="Contacts" url="#contacts" /> */}

      {arr.map((el) => {
        return <NavLink name={el.name} url={el.url} />;
      })}
    </div>
  );
};

export default Navigation;
