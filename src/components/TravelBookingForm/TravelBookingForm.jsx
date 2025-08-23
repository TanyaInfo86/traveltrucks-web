import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import style from "./TravelBookingForm.module.css";
import TravelBookingDate from "./TravelBookingDate.jsx";

const BookingSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name is too short (min 3)")
    .max(50, "Name is too long (max 50)")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  startDate: Yup.date()
    .nullable()
    .required("Booking date is required"),
  endDate: Yup.date()
    .nullable()
    .required("Booking date is required")
    .when("startDate", (start, schema) =>
      start
        ? schema.min(start, "End date must be after start date")
        : schema
    ),
  comment: Yup.string().max(200, "Comment is too long (max 200)"),
});

export default function TravelBookingForm() {
  return (
    <div className={style.formWrapper}>
      <h3 className={style.title}>Book your campervan now</h3>
      <p className={style.text}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          startDate: null, // Date | null
          endDate: null,   // Date | null
          comment: "",
        }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          // Можеш відправити на бекенд у зручному форматі:
          const payload = {
            ...values,
            startDate: values.startDate?.toISOString(),
            endDate: values.endDate?.toISOString(),
          };
          console.log("SUBMIT:", payload);
          toast.success("Booking successful!");
          resetForm();
        }}
      >
        {({ setFieldValue, validateForm, values, errors, touched }) => (
          <Form className={style.form} noValidate>
            {/* Name */}
            <div className={style.fieldWrap}>
              <Field
                name="name"
                placeholder="Name*"
                className={style.field}
              />
              <ErrorMessage name="name" component="span" className={style.error} />
            </div>

            {/* Email */}
            <div className={style.fieldWrap}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={style.field}
              />
              <ErrorMessage name="email" component="span" className={style.error} />
            </div>

            {/* Booking dates (range) */}
            <div className={style.fieldWrap}>
              <TravelBookingDate
                startDate={values.startDate}
                endDate={values.endDate}
                onChange={(start, end) => {
                  setFieldValue("startDate", start);
                  setFieldValue("endDate", end);
                }}
              />
              {/* Виведемо одну загальну помилку для блоку дат (зручніше для макета) */}
              {(touched.startDate || touched.endDate) && (errors.startDate || errors.endDate) ? (
                <span className={style.error}>
                  {errors.endDate || errors.startDate}
                </span>
              ) : null}
            </div>

            {/* Comment */}
            <div className={style.fieldWrap}>
              <Field
                name="comment"
                as="textarea"
                rows="4"
                placeholder="Comment"
                className={style.field}
              />
              <ErrorMessage name="comment" component="span" className={style.error} />
            </div>

            <button
              type="submit"
              className={style.button}
              onClick={() =>
                validateForm().then((errs) => {
                  Object.values(errs).forEach((msg) => toast.error(String(msg)));
                })
              }
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
