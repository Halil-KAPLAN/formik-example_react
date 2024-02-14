import { useField } from "formik";
import PropTypes from "prop-types";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="inputDiv">
      <div className="checkbox">
        <input {...field} {...props} className={meta.error && "inputError"} />
        <span>{label}</span>
      </div>
      {meta.error && <p className="inputErrorMsg">{meta.error}</p>}
    </div>
  );
};

CustomCheckbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default CustomCheckbox;
