import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const PortalForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        university: "",
        isAccepted: false,
      }}
      validationSchema={advancedSchema}
      onSubmit={async (_formValues, actions) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="User Name"
            name="userName"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect label="University" name="university">
            <option value="">Please select a university</option>
            <option value="bogazici">Boğaziçi University</option>
            <option value="gsu">Galatasaray University</option>
            <option value="odtu">Middle East Technical University</option>
            <option value="itu">İstanbul Technical University</option>
          </CustomSelect>
          <CustomCheckbox
            label="I agree to the terms of use."
            name="isAccepted"
            type="checkbox"
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <Link className="formLink" to="/">
            Go to Main Form
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default PortalForm;
