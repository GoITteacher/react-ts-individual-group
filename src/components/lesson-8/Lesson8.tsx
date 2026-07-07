import Container8 from "./Container8/Container8";
import Footer8 from "./Footer8/Footer8";
import Header8 from "./Header8/Header8";
import LangSelector from "./LangSelector/LangSelector";
import css from "./Lesson8.module.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

const Lesson8 = () => {
  return (
    <div className={css["lesson8"]}>
      <Header8 />
      <LangSelector />
      <UserForm />
      <UserList />
      <Container8 />
      <Footer8 />
    </div>
  );
};

export default Lesson8;
