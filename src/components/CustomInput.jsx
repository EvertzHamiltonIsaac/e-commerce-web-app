import PropTypes from "prop-types";

const CustomInput = (props) => {
    const { type, name, placeholder, classname } = props;
    return (
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${classname}`}
        />
      </div>
    );
  };
  
  CustomInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired
  };
  export default CustomInput;