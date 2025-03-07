import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BackButton.scss";

const BackButton = () => {
  const nav = useNavigate();

  const handleBack = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
    setTimeout(() => nav(-1), 10);
  };

  return (
    <div>
      <button className="back-button" onClick={handleBack}>
        BACK
      </button>
    </div>
  );
};

export default BackButton;
