import "./home.scss";
import MainMenu from "../../components/MainMenu/MainMenu";
import landingVideo from "../../assets/videos/tv_landing_video.mp4";
import tvLogoShow from "../../assets/videos/tv_logo_show.mp4";

const Home = () => {
  return (
    <>
      <section className="hero-section-one" id="home">
        <MainMenu />
        <div className="landing-video-container">
          <video src={landingVideo} autoPlay playsInline muted />
        </div>
      </section>

      <section className="hero-section-two">
        <div className="logo-show-container">
          <video src={tvLogoShow} autoPlay playsInline muted loop />

          <div className="text-content">
            <h3>
              We are a creative studio based in Bengaluru, specializing in
              design, motion, web, and social.
            </h3>
            <p>
              Our phenomenal team known for innovation and quality, have
              completed work for.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
