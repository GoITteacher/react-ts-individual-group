import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Form1.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const ValidationShema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(24, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  destination: Yup.string().required("Destination is required"),
  start: Yup.string()
    .matches(/\d{4}-\d{2}-\d{2}/)
    .required("Start is required"),
  end: Yup.string()
    .matches(/\d{4}-\d{2}-\d{2}/)
    .required("required"),
  travelers: Yup.number().required("required"),
  budget: Yup.number().required("required"),
  notes: Yup.string().required("required"),
});

interface FormValues {
  name: string;
  email: string;
  destination: string;
  start: string;
  end: string;
  travelers: number;
  budget: number;
  notes: string;
}
const initialValues: FormValues = {
  name: "",
  email: "",
  destination: "",
  start: "",
  end: "",
  travelers: 0,
  budget: 0,
  notes: "",
};

const Form1 = () => {
  const handleSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationShema}
    >
      {({ errors, isValidating }) => {
        return (
          <Form className={css.form}>
            <h2>Запит на подорож</h2>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Клієнт</legend>
              <label className={css.label} htmlFor="travel-name">
                Повне ім’я
              </label>
              <Field
                id="travel-name"
                name="name"
                type="text"
                className={clsx(css.input, Boolean(errors.name) && css.invalid)}
                placeholder="Ім’я Прізвище"
              />
              <label className={css.label} htmlFor="travel-email">
                Email
              </label>
              <Field
                id="travel-email"
                name="email"
                type="email"
                className={css.input}
                placeholder="name@email.com"
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className={css.error}
              ></ErrorMessage>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Маршрут</legend>
              <label className={css.label} htmlFor="destination">
                Напрямок / місто
              </label>
              <Field
                id="destination"
                name="destination"
                type="text"
                className={css.input}
                placeholder="Напр., Барселона"
              />
              <ErrorMessage
                name="destination"
                component={"p"}
                className={css.error}
              ></ErrorMessage>

              <label className={css.label} htmlFor="start-date">
                Дата старту
              </label>

              <Field
                id="start-date"
                name="start"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="start"
                component={"p"}
                className={css.error}
              ></ErrorMessage>

              <label className={css.label} htmlFor="end-date">
                Дата повернення
              </label>

              <Field
                id="end-date"
                name="end"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="end"
                component={"p"}
                className={css.error}
              ></ErrorMessage>

              <label className={css.label} htmlFor="travelers">
                Кількість мандрівників
              </label>
              <Field
                id="travelers"
                name="travelers"
                type="number"
                min="1"
                className={css.input}
                placeholder="2"
              />
              <ErrorMessage
                name="travelers"
                component={"p"}
                className={css.error}
              ></ErrorMessage>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Побажання</legend>
              <label className={css.label} htmlFor="budget">
                Бюджет
              </label>
              <Field
                as="select"
                id="budget"
                name="budget"
                className={css.input}
                defaultValue=""
              >
                <option value="" disabled>
                  Обери діапазон
                </option>
                <option value="economy">Економ</option>
                <option value="comfort">Комфорт</option>
                <option value="lux">Lux</option>
              </Field>
              <ErrorMessage
                name="budget"
                component={"p"}
                className={css.error}
              ></ErrorMessage>

              <label className={css.label} htmlFor="travel-notes">
                Коментарі
              </label>
              <Field
                as="textarea"
                id="travel-notes"
                name="notes"
                rows={4}
                className={css.textarea}
                placeholder="Стиль подорожі, готелі, активності"
              ></Field>
              <ErrorMessage
                name="notes"
                component={"p"}
                className={css.error}
              ></ErrorMessage>
            </fieldset>

            <button type="submit" className={css.button}>
              Отримати пропозицію
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form1;
