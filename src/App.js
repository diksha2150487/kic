import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/Mask group.png";
import img0 from "./images/Group 1000006637.png";
import img2 from "./images/1200x630wa (1) 1.png";
import img3 from "./images/circle.png";
import img4 from "./images/Group 1000004718.png";
import img5 from "./images/Group 1000004715.png";
import img6 from "./images/Group 1000004716.png";
import img7 from "./images/Aboust us sx (1).png";
import img8 from "./images/HOME 2 (1).png";
import img9 from "./images/Aboust us Header (1).png";
import img10 from "./images/Shop now Header 1 (1).png";
import img11 from "./images/Login Screen 1 (1).png";

function App() {
  return (
    <div>
      <div className="first">
        <div className="left_section">
          <p className="eez">
            <img src={img1} id="circle"></img>
          </p>
          <p className="premium">
            KICK- EEZ Premium, Made in America recoil pads and accessories to
            make your shooting experience more comfortable.
          </p>
          <h3>Technologies Used</h3>
          <div className="main_box">
            <img src={img2} id="sim"></img>
            <img src={img3} id="rotat"></img>
          </div>
        </div>
        <div className="right_section">
          <img src={img0} id="total"></img>
        </div>
      </div>
      {/* ************************************************** */}
      <div className="second">
        <p className="service">Service Provided</p>
        <div className="main_img">
          <div className="one">
            <img src={img4} id="ux"></img>
            <p>UX/UI Website Design</p>
          </div>
          <div className="one">
            <img src={img5} id="web"></img>
            <p>Website Development</p>
          </div>
          <div className="one">
            <img src={img6} id="qa"></img>
            <p>QA & Website Testing</p>
          </div>
        </div>
      </div>
      {/* *********************************************** */}
      <div className="third">
        <p>Wireframes</p>
        <div className="three-section">
          <div className="double">
            <div className="on-img">
              <img src={img7} id="pads"></img>
            </div>
            <div className="two-img">
              <img src={img9} id="pads"></img>
            </div>
          </div>
          <div className="single_big">
            <img src={img8} id="pads"></img>
          </div>
          <div className="triple">
            <div className="five-cross">
              <img src={img10} id="pads"></img>
            </div>
            <div className="login">
              <img src={img11} id="pads"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
