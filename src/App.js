import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/Group (8).png";
import img2 from "./images/1200x630wa (1) 1.png";
import img3 from "./images/Frame.png";
import img4 from "./images/Group 1000004719.png";
import img5 from "./images/Group 1000004720.png";
import img6 from "./images/Group 1000004717.png";
function App() {
  return (
    <div>
      <div className="first">
        <div className="left_section">
          <p className="eez">
            KICK-EEZ<img src={img1} id="circle"></img>
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
      </div>
      {/* ************************************************** */}
      <div className="second">
        <p className="service">Service Provided</p>
        <div className="main_img">
          <img src={img4} id="ux"></img>
          <img src={img5} id="web"></img>
          <img src={img6} id="qa"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
