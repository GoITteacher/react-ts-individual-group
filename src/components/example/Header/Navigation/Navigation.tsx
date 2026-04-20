import AdminNavigation from "./AdminNavigation/AdminNavigation";
import css from "./Navigation.module.css";
import UserNavigation from "./UserNavigation/UserNavigation";

const Navigation = () => {
  return (
    <nav className={css["navigation"]}>
      <UserNavigation />
      <AdminNavigation />
    </nav>
  );
};

export default Navigation;
