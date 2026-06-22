import { Field, Form, Formik } from "formik";
import css from "./Form2.module.css";
import { useId } from "react";

const Form2 = () => {
  const id = useId();

  return (
    <div className={css["form2"]}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <h2>Запит у підтримку</h2>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Контакти</legend>

            <label className={css.label} htmlFor={`${id}support-name`}>
              Ім’я
            </label>
            <Field id={`${id}support-name`} className={css.input} />

            <label className={css.label} htmlFor="support-email">
              Email
            </label>
            <Field id="support-email" className={css.input} />
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Деталі</legend>

            <label className={css.label} htmlFor="product">
              Продукт
            </label>
            <Field as="select" id="product" className={css.input}>
              <option>Обери продукт</option>
              <option>Веб-додаток</option>
              <option>Мобільний застосунок</option>
              <option>API / інтеграція</option>
            </Field>

            <label className={css.label} htmlFor="issue-type">
              Тип питання
            </label>
            <Field as="select" id="issue-type" className={css.input}>
              <option>Обери тип</option>
              <option>Баг</option>
              <option>Оплата</option>
              <option>Feature request</option>
              <option>Інше</option>
            </Field>

            <p className={css.label}>Терміновість</p>

            <label className={css.option}>
              <Field />
              Низька
            </label>

            <label className={css.option}>
              <input />
              Середня
            </label>

            <label className={css.option}>
              <input />
              Висока
            </label>
          </fieldset>

          <label className={css.label} htmlFor="support-message">
            Опис проблеми
          </label>
          <Field
            as="textarea"
            id="support-message"
            rows={4}
            className={css.textarea}
          />

          <button type="submit" className={css.button}>
            Надіслати запит
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form2;
