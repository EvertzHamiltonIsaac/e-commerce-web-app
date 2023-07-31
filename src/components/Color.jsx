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
                onClick={() => setColor(item?._id) }
                style={{ backgroundColor: item?.code  , cursor: 'pointer'}}
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
      _id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  setColor: PropTypes.func,
};

export default Color;