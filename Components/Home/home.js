import React from "react";
import "./home.css";
var imgSrc = require("../../images/fox.gif");

var projectImg1 = require("../../images/projects/P^3.png");
var projectImg2 = require("../../images/projects/KMSE.png");
var projectImg3 = require("../../images/projects/NID.png");

var paragraph =
  "23 years old and a graduate with a BS in Computer Science from the Lebanese American University. I have been honing my skills for 6 years now. I'm a fully-fledged software developer with an ambition to become respected and do what I love in this industry.";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      transform: "rotateY(0deg)",
      linkedInUrL: "https://www.linkedin.com/in/kareem-ismail-742947197/",
      gitHubUrl: "https://github.com/KareemTahaIsmail",
      opacity: 0,
      height: "0px",
      details: "More",
      arrowIcon: <i class="fas fa-arrow-down"></i>,
    };

    this.showDetails = this.showDetails.bind(this);
  }

  flipCard = () => {
    if (this.state.transform === "rotateY(0deg)")
      this.setState({
        transform: "rotateY(180deg)",
      });
    else
      this.setState({
        transform: "rotateY(0deg)",
      });
  };

  showDetails = (e) => {
    if (this.state.opacity === 0) {
      this.setState({
        opacity: 1,
        height: "auto",
        details: "Less",
        arrowIcon: <i class="fas fa-arrow-up"></i>,
      });
    } else {
      this.setState({
        opacity: 0,
        height: "0px",
        details: "More",
        arrowIcon: <i class="fas fa-arrow-down"></i>,
      });
    }
  };

  render() {
    return (
      <div className="flip-card">
        <div
          className="flip-card-inner"
          style={{ transform: this.state.transform }}
        >
          <div className="flip-card-front">
            <div className="front-main">
              <img className="displayImg" src={imgSrc} alt="displayImage" />
            </div>
            <div className="front-content">
              <h1>Kareem Ismail</h1>
              <p>{paragraph}</p>
              <ul>
                <li>
                  <a href={this.state.linkedInUrL}>
                    <i class="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href={this.state.gitHubUrl}>
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
              <button className="front-btn" onClick={this.flipCard}>
                Projects Not On My Resume
              </button>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="project-heading">
                    <h3>P<sup>3</sup></h3>
                  </div>
                  <img
                    src={projectImg1}
                    alt="projectImage"
                  />
                  <div className="details">
                    <p>A parallel programming language that proved to execute code 10% faster than Java. Tested it using the Matrix Multiplication operation. Using Java. Unfortunately, could not deploy it online.</p>
                  </div>
                  <div className="buttons">
                    <a className="btn-src" href="https://github.com/KareemTahaIsmail/P_Cubed">Source Code</a>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="project-heading">
                    <h3>Kareem's Movie Search Engine</h3>
                  </div>
                  <img
                    src={projectImg2}
                    alt="projectImage"
                  />
                  <div className="details">
                    <p>User can search for any movie from the public API TMDB easily. Webpage the top and popular movies to watch with a search-bar in the the navigation bar. Using jQuery & Vanilla Javascript.</p>
                  </div>
                  <div className="buttons">
                    <a className="btn-src" href="https://github.com/KareemTahaIsmail/KareemsMovieSearch">Source Code</a>
                    <a className="btn-try" href="https://optimistic-banach-566e24.netlify.app/">Try it out!</a>
                  </div>
                </div>
                <div className="col">
                  <div className="project-heading">
                    <h3>Network Intrusion Detection</h3>
                  </div>
                  <img
                    src={projectImg3}
                    alt="projectImage"
                  />
                  <div className="details">
                    <p>A network intrusion detection test run by testing different algorithms including SVM, decision trees, and random forests. Data was extracted from the KD99 Cup Dataset. Using Python.</p>
                  </div>
                  <div className="buttons">
                    <a className="btn-src" href="https://github.com/KareemTahaIsmail/Testing-Algorithms-with-the-KD99CUPDataset">Source Code</a>
                    <a className="btn-try" href="https://cocalc.com/app#projects/936e81a0-306c-45f9-98d9-1aa377121d7b/files/KDD_CUP_99_dataset_1.ipynb?session=default">Try it out!</a>
                  </div>
                </div>
              </div>
              <button className="back-btn" onClick={this.flipCard}>Go Back</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
