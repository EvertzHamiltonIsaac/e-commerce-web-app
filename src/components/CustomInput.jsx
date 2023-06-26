import PropTypes from "prop-types";

const CustomInput = (props) => {
    const { type, name, placeholder, classname, value, onChange, onBlur } = props;
    return (
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${classname}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  };
  CustomInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    classname: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  };
  export default CustomInput;