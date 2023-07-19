import PropTypes from 'prop-types';

const CustomInput = (props) => {
  const { type, name, placeholder, className, value, onChange, onBlur } = props;

  const inputGroupStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    margin: '0.7em 0 0.7em 0',
    position: 'relative',
  };

  const inputStyle = {
    fontSize: '100%',
    padding: '0.5em',
    outline: 'none',
    border: '2px solid rgb(200, 200, 200)',
    backgroundColor: 'transparent',
    borderRadius: '10px',
    width: '100%',
  };

  const labelStyle = {
    fontSize: '100%',
    position: 'absolute',
    left: '0',
    padding: '0.5em',
    marginLeft: '0.5em',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
    color: 'rgb(100, 100, 100)',
  };

  const handleInputFocus = (event) => {
    event.target.nextElementSibling.style.transform = 'translateY(-50%) scale(.9)';
    event.target.nextElementSibling.style.margin = '0em';
    event.target.nextElementSibling.style.marginLeft = '1.3em';
    event.target.nextElementSibling.style.padding = '0.2em';
    event.target.nextElementSibling.style.backgroundColor = 'white';
  };

  const handleInputBlur = (event) => {
    if (!event.target.value) {
      event.target.nextElementSibling.style.transform = '';
      event.target.nextElementSibling.style.marginLeft = '0.5em';
      event.target.nextElementSibling.style.padding = '0.5em';
      event.target.nextElementSibling.style.backgroundColor = '';
    }
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div className="inputGroup" style={inputGroupStyle}>
      <input
        type={type}
        name={name}
        className={` ${className}`}
        onChange={onChange}
        value={value}
        style={inputStyle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoComplete="off"
      />
      <label style={labelStyle}>
        {placeholder}
      </label>
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default CustomInput;
