import { useField } from "formik";
import PropTypes from "prop-types";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="inputDiv">
      <label>{label}</label>
      <input {...field} {...props} className={meta.error && "inputError"} />
      {meta.error && <p className="inputErrorMsg">{meta.error}</p>}
    </div>
  );
};

CustomInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CustomInput;
