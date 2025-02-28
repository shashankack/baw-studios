import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

const BackButton = () => {
  const nav = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => nav(-1)}>
        BACK
      </button>
    </div>
  );
};

export default BackButton;
