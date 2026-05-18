import { useEffect, useState } from "react";
import css from "./FontSizeChanger.module.css";
// Створи компонент FontSizeChanger. На екрані має бути текст. Додай кнопки Increase font та Decrease font. Розмір тексту повинен змінюватись.

const FontSizeChanger = () => {
  const [fontSize, setfontSize] = useState(12);

  useEffect(() => {
    console.log("Народження");
  }, []);

  useEffect(() => {
    console.log("Нове значення", fontSize);
  }, [fontSize]);

  return (
    <div className={css["fontSizeChanger"]}>
      <button
        onClick={() => {
          setfontSize(fontSize + 1);
        }}
      >
        Increase font
      </button>
      <button
        onClick={() => {
          setfontSize(fontSize - 1);
        }}
      >
        Decrease font
      </button>
      <div>
        <p style={{ fontSize: `${fontSize}px` }}>FontSizeChanger</p>
      </div>
    </div>
  );
};

export default FontSizeChanger;
