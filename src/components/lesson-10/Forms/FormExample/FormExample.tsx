import { useId } from "react";
import css from "./FormExample.module.css";

const FormExample = () => {
  // const prefix = useId();

  const handleSubmit = (formData: FormData) => {
    const data = {
      //   firstname: formData.get("firstname") as string,
      //   lastname: formData.get("lastname") as string,
      //   email: formData.get("email") as string,
      //   password: formData.get("password") as string,
      //   color: formData.get("color") as string,
      //   date: new Date(formData.get("date") as string),
      //   time: formData.get("time") as string,
      //   number: Number(formData.get("number")),
      //   select: formData.get("delivery") as string,
      //   isAdmin: Boolean(formData.get("isAdmin")),
      //   cities: formData.getAll("city") as string[],
      //   radio: formData.get("radio") as string,
      //   radio1: formData.get("radio1") as string,
      //   file: formData.get("userfile") as File,
      volume: formData.get("volume"),
    };

    console.log(data);
  };

  return (
    <div className={css["formExample"]}>
      <form action={handleSubmit}>
        <label htmlFor={`${prefix}-firstname`}>Firstname</label>
        <input type="text" name="firstname" id={`${prefix}-firstname`} />

        {/* <label>
          <input type="text" name="lastname" />
        </label> */}

        {/* <input type="email" name="email" /> */}
        {/* <input type="password" name="password" /> */}
        {/* <input type="color" name="color" /> */}
        {/* <input type="date" name="date" /> */}
        {/* <input type="time" name="time" /> */}
        {/* <input type="number" name="number" /> */}

        {/* <select name="delivery">
          <option value="del1">del1</option>
          <option value="del2">del2</option>
          <option value="del3">del3</option>
        </select>

        <select name="typeMessage">
          <option value="del1">del1</option>
          <option value="del2">del2</option>
          <option value="del3">del3</option>
        </select>

        <div>
          <input type="checkbox" name="isAdmin" />
        </div>

        <div>
          <p>Оберіть міста у яких ви хотіли б побувати</p>
          <input type="checkbox" name="city" value="Львів" /> Львів
          <input type="checkbox" name="city" value="Дніпро" />
          Дніпро
          <input type="checkbox" name="city" value="Київ" />
          Київ
          <input type="checkbox" name="city" value="Харків" />
          Харків
          <input type="checkbox" name="city" value="Одеса" />
          Одеса
          <input type="checkbox" name="city" value="Тернопіль" />
          Тернопіль
        </div>

        <div>
          <input type="radio" name="radio" value="1" />
          <input type="radio" name="radio" value="2" />
          <input type="radio" name="radio" value="3" />
        </div>

        <div>
          <label>
            <input type="radio" name="radio1" value="1" />
            Radio1
          </label>
          <label>
            <input type="radio" name="radio1" value="2" />
            Radio2
          </label>
          <label>
            <input type="radio" name="radio1" value="3" />
            Radio3
          </label>
        </div>

        <input type="file" name="userfile" />

        <input type="range" min="0" max="100" name="volume" /> */}

        <button type="submit">Test</button>
      </form>
    </div>
  );
};

export default FormExample;
