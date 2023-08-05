import PropTypes from "prop-types";
const Container = (props) => {
  return (
    <section className={props.class1}>
      <div className="container-xxl">{props.children}</div>
    </section>
  );
};

Container.propTypes = {
    // class1: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

export default Container;