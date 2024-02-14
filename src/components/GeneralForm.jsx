import { useFormik } from "formik";
import "./styles/GeneralForm.css";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const GeneralForm = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (_formValues, actions) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        actions.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Enter your e-mail address"
          onChange={handleChange}
          className={errors.email ? "inputError" : ""}
        ></input>
        {errors.email && <p className="inputErrorMsg">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          placeholder="Enter your age"
          min={0}
          onChange={handleChange}
          className={errors.age ? "inputError" : ""}
        ></input>
        {errors.age && <p className="inputErrorMsg">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Enter your password"
          onChange={handleChange}
          className={errors.password ? "inputError" : ""}
        ></input>
        {errors.password && <p className="inputErrorMsg">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter your password again"
          value={values.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "inputError" : ""}
        ></input>
      </div>
      {errors.confirmPassword && (
        <p className="inputErrorMsg">{errors.confirmPassword}</p>
      )}

      <button type="submit" disabled={isSubmitting}>
        Save
      </button>
      <Link className="formLink" to="/portal">
        Go to Portal
      </Link>
    </form>
  );
};

export default GeneralForm;
