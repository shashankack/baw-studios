import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const nav = useNavigate();

  return (
    <div>
      <button
        onClick={() => nav(-1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          position: "fixed",
          top: "120px",
          right: "30px",
        }}
      >
        BACK
      </button>
    </div>
  );
};

export default BackButton;
