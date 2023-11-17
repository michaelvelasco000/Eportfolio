import { useEffect } from "react";
import NavBar from "./NavBar";
import myImage from "./assets/miggy1.png";
import ProJ1 from "./assets/PROJ1.png";
import ProJ2 from "./assets/proj2.png";
import todo from "./assets/todo.png";
import calcu from "./assets/calcu.png";
import resume from "./assets/MAVcv.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faReact,
  faBootstrap,
  faJava,
  faCpanel,
  faGithub,
  faTelegram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
        <NavBar />
           <div className="container-fluid overflow-hidden">
      
   
        <div className="row frow  justify-content-center">
          <div className="col-lg-5 mb-5 d-flex justify-content-center align-items-end">
            <div
              className=""
              data-aos="fade-right"
                  data-aos-anchor="#example-anchor"
              data-aos-offset="1000"
              data-aos-duration="1000"
              style={{ borderLeft: "solid 10px yellow", marginBottom: "2rem" }}
            >
              <p>Web Developer</p>
              <h2>Michael Arian Velasco</h2>
              <p>(アリアン)</p>
              <hr />
              <p style={{ textAlign: "justify" }}>
                Welcome to the web portfolio of <span>Michael Arian</span>, a
                recent IT graduate showcasing a talent for web development and a
                flair for problem-solving. Proficient in HTML, CSS, JavaScript,
                Php, Bootstrap, React and etc, I am excels in crafting
                responsive and innovative solutions. With a collaborative
                spirit, project management skills, and a commitment to
                continuous learning, I am is ready to make a positive impact in
                the dynamic world of IT.
              </p>
              <a href="https://www.facebook.com/michael.velasco.395669/">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="3x"
                  style={{ margin: "0 10px" }}
                />
              </a>
              <a href="https://t.me/MichaelArianVelasco">
                {" "}
                <FontAwesomeIcon
                  icon={faTelegram}
                  size="3x"
                  style={{ margin: "0 10px" }}
                />
              </a>

              <a href="https://www.linkedin.com/in/michaelarianvelasco/">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  style={{ margin: "0 10px" }}
                />
              </a>
              <a href="https://github.com/michaelvelasco000">
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  style={{ margin: "0 10px" }}
                />
              </a>

              <br />

              <button>
                <a href={resume} target="_blank" class="btn2">
                  <span class="spn2">---RESUME---</span>
                </a>
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="text-end">
              <h1 data-aos="zoom-out" data-aos-duration="500">
                4
              </h1>
              <h1 data-aos="zoom-out" data-aos-duration="1000">
                R
              </h1>
              <h1
                data-aos="zoom-out"
                data-aos-duration="1500"
                className="blend1"
              >
                I
              </h1>
              <h1
                data-aos="zoom-out"
                data-aos-duration="2000"
                className="blend"
              >
                A
              </h1>
              <h1
                data-aos="zoom-out"
                data-aos-duration="2500"
                className="blend2"
              >
                N
              </h1>
            </div>

            <img
              data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
              data-aos-offset="1000"
              data-aos-duration="1000"
              src={myImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 id="me">Projects</h2>
            <hr />
            <marquee height="auto" behavior="alternate">
              <FontAwesomeIcon
                icon={faHtml5}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faJs}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faPhp}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faReact}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faBootstrap}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faJava}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faCpanel}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faJs}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faPhp}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faReact}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faBootstrap}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faJava}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faCpanel}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <FontAwesomeIcon
                icon={faGithub}
                size="6x"
                style={{ margin: "0 50px" }}
              />
              <span>&emsp;</span>
            </marquee>
          </div>

          <div className="col-lg-6 p-3 d-flex flex-wrap gap-3 justify-content-evenly">
            <div data-aos="fade-down-right" data-aos-duration="1000">
              {" "}
              E-learning Management System
              <div className="book">
                <p className="text-justify" style={{ marginLeft: "20%" }}>
                  E-Learning Management System ELMS with CRUD functionality
                  enables seamless management of educational content,
                  facilitating the creating, updating, and deleting of courses,
                  modules, and user data.
                </p>
                <div className="cover">
                  <img src={ProJ1} alt="" />
                </div>
              </div>
              <br />
              <center>
                {" "}
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faPhp}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
              </center>
            </div>

            <div data-aos="fade-down-left" data-aos-duration="1000">
              {" "}
              Library Management System
              <div className="book">
                <p className="text-justify" style={{ marginLeft: "20%" }}>
                  An Library Management System equipped with CRUD functionality
                  simplifies the organization and control of digital resources,
                  enabling effortless creating, updating, and deleting of books,
                  user records, and other library assets.
                </p>
                <div className="cover">
                  <img src={ProJ2} alt="" />
                </div>
              </div>
              <br />
              <center>
                {" "}
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faPhp}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
              </center>
            </div>

            <div data-aos="fade-up-right" data-aos-duration="1000">
              {" "}
              Todo List
              <div className="book">
                <p className="text-justify" style={{ marginLeft: "20%" }}>
                  An Todo List application with CRD functionality facilitates
                  the seamless management of tasks, allowing users to
                  effortlessly create, read, and delete items from their to-do
                  lists.
                </p>
                <div className="cover">
                  <img src={todo} alt="" />
                </div>
              </div>
              <br />
              <center>
                {" "}
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
              </center>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000">
              {" "}
              Calculator
              <div className="book">
                <p className="text-justify" style={{ marginLeft: "20%" }}>
                  Created for enhanced user flexibility, this calculator with
                  CRD capabilities allows users to perform basic arithmetic
                  operations while providing the added convenience of
                  customizing and deleting previous calculations. Its
                  versatility simplifies numeric computations, enabling users to
                  seamlessly create, retrieve, and adjust calculations tailored
                  to their specific needs.
                </p>
                <div className="cover">
                  <img src={calcu} alt="" />
                </div>
              </div>
              <br />
              <center>
                {" "}
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  style={{ marginRight: "5px" }}
                />
              </center>
            </div>
          </div>

          <div className="col-lg-5 d-flex align-items-center mb-5">
            <div
              className="p-3"
              style={{ textAlign: "justify", borderLeft: "solid 10px yellow" }}
            >
              <h3>Projects</h3>
              <hr />I built this project to boost my skills by putting what I've
              learned into practice. Adding features like CRUD functionality
              helps me become more adapt at software development and provides
              hands-on experience in creating practical solutions. This project
              is a valuable learning opportunity, allowing me to refine my
              technical skills and understand how to build real-world
              applications.
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row justify-content-center">
          <h3 id="contacts">Contacts</h3>
          <hr />
          <div className="col-auto justify-content-center">
            <div class="form-container" data-aos="fade-right">
              <form class="form">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input required="" name="email" id="email" type="text" />
                </div>
                <div class="form-group">
                  <label for="textarea">How Can I Help You?</label>
                  <textarea
                    required=""
                    cols="50"
                    rows="10"
                    id="textarea"
                    name="textarea"
                  >
                    {" "}
                  </textarea>
                </div>
                <button type="submit" class="form-submit-btn">
                  Send
                </button>
              </form>
            </div>
            <br />
          </div>
          <div
            className="col-auto text-center align-self-center"
            data-aos="fade-left"
          >
            <h5>
              {" "}
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ marginRight: "5px" }}
              />
              Social media Account
            </h5>
            <a href="https://www.facebook.com/michael.velasco.395669/">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                style={{ margin: "0 10px" }}
              />
            </a>
            <a href="https://t.me/MichaelArianVelasco">
              {" "}
              <FontAwesomeIcon
                icon={faTelegram}
                size="3x"
                style={{ margin: "0 10px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/michaelarianvelasco/">
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                style={{ margin: "0 10px" }}
              />
            </a>
            <a href="https://github.com/michaelvelasco000">
              {" "}
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                style={{ margin: "0 10px" }}
              />
            </a>
            <br />
            <br />
            <br />
            <h4>
              <FontAwesomeIcon icon={faPhone} /> Contact Number
            </h4>
            +63 9454174389
            <br />
            <br />
            <br />
            <h4>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "0 5px" }}
              />
              E-mail
            </h4>
            michaelarianvelasco@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
