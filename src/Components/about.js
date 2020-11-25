import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row"></div>
      <div className="col"></div>
      <div className="page-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <img
            src={process.env.PUBLIC_URL + "/assets/FB_IMG_1593804519464.jpg"}
            alt="Manuel Pierre"
            className="img-thumbnail"
          />
        </div>
        <div className="col">
          <p>
            Full Stack Developer using Healthcare Ethics, Compliance, and
            Privacy background to leverage my experience to provide an impactful
            user experience. Recently earned a certificate in full stack web
            development certificate from Rutgers University, with newly
            developed skills in JavaScript, CSS, React.js, and responsive web
            design. I recently worked with a team multi-page MERN app that helps
            local business owners create a viable ecommerce site where they can
            provide users with an experience that is personalized, simple and
            modern. I am motivated to provide in-depth solutions to problems.
            I’m passionate about leveraging my skills as part of a growing team
            to build greater applications on the web.
          </p>
          <br></br>
          <br></br>
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="vertical"
            data-theme="dark"
            data-vanity="manuel-pierre-6656b0a"
          >
            <a
              className="LI-simple-link"
              href="https://www.linkedin.com/in/manuel-pierre-6656b0a?trk=profile-badge"
            >
              MANUEL PIERRE
            </a>
          </div>
          <br></br>
          Email Address: Pierrem1.mp@gmail.com
          <br></br>
          <br></br>
          <p>
            Link to Manuel Pierre's Github Page:{" "}
            <a href="https://github.com/ManuelPierre">
              {" "}
              https://github.com/ManuelPierre{" "}
            </a>{" "}
          </p>
          <p>
            Link to Manuel Pierre's Resume:
            <a href="./Assets/Resume.pdf">Manuel Pierre's Resume</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
