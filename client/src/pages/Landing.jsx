import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pitchfork typewriter yr taxidermy raw denim, kickstarter
            fixie sus mixtape single-origin coffee tonx fit praxis etsy.
            Typewriter gentrify wayfarers chambray. Plaid intelligentsia
            letterpress sriracha cloud bread. Listicle thundercats chartreuse,
            man braid lomo bushwick chia shoreditch gorpcore readymade ethical.
            Raw denim before they sold out vape JOMO. Sriracha heirloom raclette
            humblebrag migas pug forage ugh offal ethical fixie marfa direct
            trade. Mumblecore 3 wolf moon +1 cloud bread.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
