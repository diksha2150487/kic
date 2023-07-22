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
import img12 from "./images/Group 1000006505 (1).png";
import img13 from "./images/Group 1000006500 (1).png";
import img14 from "./images/Frame.png";
import img15 from "./images/Group 1000006826.png";
import img16 from "./images/shot.png";
import img18 from "./images/Group 1000006829.png";
import img19 from "./images/Frame (1).png";
function App() {
  return (
    <div>
      <div className="side-bg-trio">
        <div className="first-kick-pads">
          <div className="left-section-kids">
            <img src={img1} id="plus-circle" alt="img"></img>
            <p className="shoots_premium">
              <span className="heightlisght_premium"> KICK- EEZ Premium,</span>{" "}
              Made in America recoil pads and accessories to make your shooting
              experience more comfortable.
            </p>
            <h3>Technologies Used</h3>
            <div className="main-box-logic">
              <img src={img2} id="sim" alt="img"></img>
              <img src={img3} id="rotat" alt="img"></img>
            </div>
          </div>
          <div className="right-section-kids">
            <img src={img0} id="total-group" alt="img"></img>
          </div>
        </div>
        {/* ************************************************** */}
        <div className="second-service-conte">
          <p className="service-hinking">Services Provided</p>
          <div className="main-img-mighty">
            <div className="bepolo">
              <img src={img4} id="ux-safari" alt="img"></img>
              <p>UX/UI Website Design</p>
            </div>
            <div className="bepolo">
              <img src={img5} id="web-safari" alt="img"></img>
              <p>Website Development</p>
            </div>
            <div className="bepolo">
              <img src={img6} id="qa-safari" alt="img"></img>
              <p>QA & Website Testing</p>
            </div>
          </div>
        </div>
      </div>
      {/* *********************************************** */}
      <div className="third-wireframe-homie">
        <div className="inner-third-local">
          <p>Wireframes</p>
          <div className="three-section-lab">
            <div className="double-camp">
              <div className="on-img">
                <img src={img7} id="pads-cats" alt="img"></img>
              </div>
              <div className="too-img">
                <img src={img9} id="pads-cats" alt="img"></img>
              </div>
            </div>
            <div className="single_big">
              <img src={img8} id="pads-cats" alt="img"></img>
            </div>
            <div className="triple-badge">
              <div className="five-cross">
                <img src={img10} id="pads-cats" alt="img"></img>
              </div>
              <div className="login-faire">
                <img src={img11} id="pads-cats" alt="img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************** */}
      <div className="fourth-plate-juuls">
        <div className="left-card-hub">
          <div className="vl-chic">
            <p className="fila">Font</p>
            <div className="ywo-stem">
              <div className="light-aa">
                <p className="hoo">Aa</p>
                <p className="roboto-tip">Roboto</p>
              </div>
              <div className="dark-aa">
                <p className="dark-canny">Aa</p>
                <p className="prompt-tip">Prompt</p>
              </div>
              <div className="medium-aa">
                <p className="medium">Aa</p>
                <p className="node-tip">Roboto</p>
              </div>
            </div>
            <div className="sub-worm">
              <p className="tool">Tools Use</p>
              <img src={img13} id="pals-circle" alt="img"></img>
            </div>
          </div>
        </div>
        <div className="right-card-omega">
          <p>Color Plate</p>
          <img src={img12} id="gang" alt="img" />
        </div>
      </div>{" "}
      {/* ****************************************** */}
      <div className="five-create">
        <p className="intutive">
          Our Process to Create Intuitive React Native Apps
        </p>
        <p className="leverage">
          Unlock your true potential, leverage the best of technology, and
          create apps based on modern algorithms with our React Native
          development experts.
        </p>
        <div className="triple-mainbox">
          <div className="discover-box">
            <div className="line">
              <img src={img14} id="delo"></img>
            </div>
            <p className="discover">Discover</p>
            <p className="project">
              There goes a lot in the back to turn your project into a success
              story.
            </p>
          </div>
          <hr className="horzt" />
          <div className="discover-box">
            <img src={img15} id="delo"></img>
            <p className="discover">Define</p>
            <p className="project">
              Determining the scope of how we can convert your idea into
              reality.
            </p>
          </div>
          <hr className="horzt" />
          <div className="discover-box">
            <img src={img16} id="delo"></img>
            <p className="discover">Design</p>
            <p className="project">Offering you breakthrough app prototypes</p>
          </div>
        </div>
        <div className="double-mainbox">
          <div className="discover-box">
            <img src={img18} id="delo"></img>
            <p className="discover">Analyze & Deliver</p>
            <p className="project">
              Stable and secure application served at your table as per the
              deadlines
            </p>
          </div>
          <hr className="horzt" />
          <div className="discover-box">
            <img src={img19} id="delo"></img>
            <p className="discover">Develop</p>
            <p className="project" id="important">
              We’d commence development with a - milestone based plan of action.
            </p>
          </div>
          <hr id="line2" />
          <hr id="vertical" />
        </div>
      </div>
    </div>
  );
}

export default App;
