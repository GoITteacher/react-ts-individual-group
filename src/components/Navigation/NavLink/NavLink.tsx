import css from "./NavLink.module.css";

interface NavLinkProps {
  url: string;
  name: string;
}

const NavLink = ({ name, url }: NavLinkProps) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

export default NavLink;
