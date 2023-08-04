import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import Container from "../../components/Container/Container";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;