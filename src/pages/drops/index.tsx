import Marquee from "react-fast-marquee";
import Container from "../../components/container/Container";
import animateImg from "../../assets/image/dropAnimate1.png";
import animateImg2 from "../../assets/image/dropAnimate2_1.png";
import animateImg3 from "../../assets/image/dropAnimate2_2.png";
import dropBox1 from "../../assets/image/drop-box-img-1.png";
import dropBox2 from "../../assets/image/drop-box-img-2.png";
import dropBox3 from "../../assets/image/drop-box-img-3.png";
import { Title } from "../../components";
import ImageSetter from "../../utils/ImageSetter";
import "./_drops.scss";

const Drops = () => {
  return (
    <Container>
      <div className="drop">
        <div
          className="drop__header"
          data-aos="fade-zoom-in"
          data-aos-duration="600"
        >
          <Title>coming soon</Title>
        </div>

        <Marquee gradient={false} speed={35}>
          <div className="drop__marginAnimateHero">
            <img src={animateImg} alt="" className="drop__movingImageDrop" />{" "}
          </div>
        </Marquee>

        <Marquee direction="right" gradient={false} speed={35}>
          <div>
            <img src={animateImg2} alt="" className="drop__movingImageDrop" />
            <img src={animateImg3} alt="" className="drop__movingImageDrop" />
          </div>
        </Marquee>
        <div className="drop__boxs">
          <ImageSetter
            src={dropBox1}
            className="drop__boxs__box drop__box-margin1"
          />
          <ImageSetter
            src={dropBox2}
            className="drop__boxs__box drop__box-margin2"
          />
          <ImageSetter
            src={dropBox3}
            className="drop__boxs__box drop__box-margin3"
          />
        </div>
      </div>
    </Container>
  );
};

export default Drops;
