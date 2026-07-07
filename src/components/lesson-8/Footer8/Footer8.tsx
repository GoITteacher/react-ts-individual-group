import { useConfigStore } from "../../../stores/configStore";
import css from "./Footer8.module.css";

const Footer8 = () => {
  const myLang = useConfigStore((s) => s.lang);
  return <div className={css["footer8"]}>Footer {myLang}</div>;
};

export default Footer8;
