import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Form-2.module.css";
import { useId } from "react";
import * as Yup from "yup";
import clsx from "clsx";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(10, "Too long")
    .required("required"),

  email: Yup.string().email("Invalid email").required("required"),

  product: Yup.string().required("required"),

  type: Yup.string().required("required"),

  message: Yup.string().max(10, "Too long"),
});

interface InitialValues {
  name: string;
  email: string;
  product: string;
  type: string;
  message: string;
}

const initialValues: InitialValues = {
  name: "Hello name",
  email: "",
  product: "",
  type: "type-1",
  message: "",
};

const Form2 = () => {
  const id = useId();

  return (
    <div className={css["form2"]}>
      <h2>Formik</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={ValidationSchema}
      >
        {({ errors, resetForm }) => {
          return (
            <Form className={css.form}>
              <h2>Запит у підтримку</h2>

              <fieldset className={css.fieldset}>
                <legend className={css.legend}>Контакти</legend>

                <label className={css.label} htmlFor={`${id}support-name`}>
                  Ім’я
                </label>
                <Field
                  name="name"
                  id={`${id}support-name`}
                  className={clsx(
                    css.input,
                    Boolean(errors.name) && css.invalid,
                  )}
                />

                <label className={css.label} htmlFor="support-email">
                  Email
                </label>
                <Field name="email" id="support-email" className={css.input} />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                ></ErrorMessage>
              </fieldset>

              <fieldset className={css.fieldset}>
                <legend className={css.legend}>Деталі</legend>

                <label className={css.label} htmlFor="product">
                  Продукт
                </label>
                <Field
                  name="product"
                  as="select"
                  id="product"
                  className={css.input}
                >
                  <option>Обери продукт</option>
                  <option>Веб-додаток</option>
                  <option>Мобільний застосунок</option>
                  <option>API / інтеграція</option>
                </Field>
                <ErrorMessage
                  name="product"
                  component="span"
                  className={css.error}
                ></ErrorMessage>

                <label className={css.label} htmlFor="issue-type">
                  Тип питання
                </label>
                <Field
                  name="type"
                  as="select"
                  id="issue-type"
                  className={css.input}
                >
                  <option value="type-1">Обери тип</option>
                  <option value="type-2">Баг</option>
                  <option value="type-3">Оплата</option>
                  <option value="type-4">Feature request</option>
                  <option value="type-5">Інше</option>
                </Field>
                <ErrorMessage
                  name="type"
                  component="span"
                  className={css.error}
                ></ErrorMessage>

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
                name="message"
                as="textarea"
                id="support-message"
                rows={4}
                className={css.textarea}
              />
              <ErrorMessage
                name="message"
                component="span"
                className={css.error}
              ></ErrorMessage>

              <button type="submit" className={css.button}>
                Надіслати запит
              </button>
              <button onClick={() => resetForm()}></button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form2;
