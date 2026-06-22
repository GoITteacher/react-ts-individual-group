import { useId } from "react";
import css from "./FormExample.module.css";
import { Field, Form, Formik, type FormikHelpers } from "formik";

interface FormValues {
  username: string;
  delivery: string;
  email: string;
  deliveryTime: string;
  restrictions: string;
  message: string;
}

const initialValues: FormValues = {
  username: "",
  email: "",
  delivery: "",
  deliveryTime: "",
  restrictions: "",
  message: "",
};

const FormExample = () => {
  const fieldId = useId();

  const handleSubmit = (
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) => {
    console.log(values);
    helpers.resetForm();
  };

  return (
    <div className={css["formExample"]}>
      <h1>Form</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Client Info</legend>
            <label htmlFor={`${fieldId}-username`} className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="username"
              id={`${fieldId}-username`}
              className={css.input}
            />
            <label htmlFor={`${fieldId}-email`} className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id={`${fieldId}-email`}
              className={css.input}
            />
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Delivery method</legend>

            <label className={css.option}>
              <Field type="radio" name="delivery" value="pickup" />
              Pickup
            </label>
            <label className={css.option}>
              <Field type="radio" name="delivery" value="courier" />
              Courier
            </label>
            <label className={css.option}>
              <Field type="radio" name="delivery" value="drone" />
              Drone delivery
            </label>
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Dietary restrictions</legend>

            <label className={css.option}>
              <Field type="checkbox" name="restrictions" value="vegan" />
              Vegan
            </label>
            <label className={css.option}>
              <Field type="checkbox" name="restrictions" value="gluten-free" />
              Gluten-free
            </label>
            <label className={css.option}>
              <Field type="checkbox" name="restrictions" value="nut-free" />
              Nut-free
            </label>
          </fieldset>

          <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
            Preferred delivery time
          </label>
          <Field
            as="select"
            name="deliveryTime"
            id={`${fieldId}-deliveryTime`}
            className={css.input}
          >
            <option value="">-- Choose delivery time --</option>
            <option value="morning">Morning (8:00-12:00)</option>
            <option value="afternoon">Afternoon (12:00-16:00)</option>
            <option value="evening">Evening (16:00-20:00)</option>
          </Field>

          <label htmlFor={`${fieldId}-message`} className={css.label}>
            Additional message
          </label>
          <Field
            as="textarea"
            name="message"
            rows={4}
            id={`${fieldId}-message`}
            className={css.textarea}
          ></Field>

          <button type="submit" className={css.button}>
            Place order
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormExample;
