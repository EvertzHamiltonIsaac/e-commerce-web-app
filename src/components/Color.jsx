import PropTypes from 'prop-types';

const Color = (props) => {
  const { colorData, setColor } = props;

  return (
    <>
      <ul className="colors ps-0">
        {colorData &&
          colorData?.map((item, index) => {
            return (
              <li
                onClick={() => setColor(item?._id)}
                style={{ backgroundColor: item?.code}}
                key={index}
              ></li>
            );
          })}
      </ul>
    </>
  );
};

Color.propTypes = {
  colorData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  setColor: PropTypes.func.isRequired,
};

export default Color;