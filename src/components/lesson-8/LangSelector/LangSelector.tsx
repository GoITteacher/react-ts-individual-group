import { useConfigStore } from "../../../stores/configStore";
import css from "./LangSelector.module.css";

const LangSelector = () => {
  const setLang = useConfigStore((s) => s.setLang);

  return (
    <div className={css["langSelector"]}>
      <select
        name="lang"
        onChange={(e) => {
          console.log(e.target.value);
          setLang(e.target.value);
        }}
      >
        <option value="en">en</option>
        <option value="ua">ua</option>
      </select>
    </div>
  );
};

export default LangSelector;
