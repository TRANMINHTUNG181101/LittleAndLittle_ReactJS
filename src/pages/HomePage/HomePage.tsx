import "../HomePage/HomePage.css";
import Description from "../../components/Description/Description";
import ImagePerson from "../../images/Lisa_Arnold_Lay_Do_F2 3.png";
import ImageLogo from "../../images/image 2.png";
import ImageGroupPersion from "../../images/render fix hair 1.png";
import ImageBalloon1 from "../../images/18451 [Converted]-02 1.png";
import ImageBalloon2 from "../../images/18451 [Converted]-03 1.png";
import ImageBalloon3 from "../../images/18451 [Converted]-06 1.png";
import ImageBalloon4 from "../../images/18451 [Converted]-05 1.png";
import ImageBalloon5 from "../../images/18451 [Converted]-04 1.png";
import ImageBalloon6 from "../../images/18451 [Converted]-03 1.png";
import ImageTitle1 from "../../images/ĐẦM SEN.png";
import ImageTitle2 from "../../images/PARK.png";
function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__logo">
          <img src={ImageLogo} alt="" />
          <h2>
            <img src={ImageTitle1} alt="" />
            <img src={ImageTitle2} alt="" />
          </h2>
        </div>
        <img src={ImageBalloon1} alt="" className="ballon1" />
        <img src={ImageBalloon2} alt="" className="ballon2" />
        <img src={ImageBalloon3} alt="" className="ballon3" />
        <img src={ImageBalloon4} alt="" className="ballon4" />
        <img src={ImageBalloon5} alt="" className="ballon5" />
        <img src={ImageBalloon6} alt="" className="ballon6" />
        <img src={ImageGroupPersion} alt="" className="group-person" />
      </div>
      <Description />
      <img src={ImagePerson} alt="" className="person" />
    </div>
  );
}

export default Home;
