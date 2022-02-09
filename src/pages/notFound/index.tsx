import { ImArrowLeft2 } from "react-icons/im";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import { Title, Subtitle } from "../../components";
import { hoverTxtBoxShadow } from "../../utils/Animations";
import "./_notFound.scss";

const NotFound = () => {
  return (
    <Container>
      <div className="not-found">
        <div
          className="not-found__Cont"
          data-aos="fade-zoom-in"
          data-aos-duration="600"
        >
          <Title>404</Title>
          <Subtitle>PAGE NOT FOUND</Subtitle>
          <div className="not-found__Cont__btnCont">
            <Link to="/">
              <motion.button
                className="not-found__Cont__btnCont__btn"
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={hoverTxtBoxShadow}
              >
                <ImArrowLeft2
                  style={{ fontSize: "20px", marginRight: "12px" }}
                />
                Back To Home
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
