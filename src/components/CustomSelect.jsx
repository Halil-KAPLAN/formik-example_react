import PropTypes from "prop-types";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="inputDiv">
      <label>{label}</label>
      <select {...field} {...props} className={meta.error && "inputError"} />
      {meta.error && <p className="inputErrorMsg">{meta.error}</p>}
    </div>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default CustomSelect;
