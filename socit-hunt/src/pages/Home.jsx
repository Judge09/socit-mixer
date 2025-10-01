import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to SOCIT Hunt</h1>
      <p>The game begins here. Solve the riddle to unlock the first clue!</p>
      <button onClick={() => navigate("/clue1")}>
        Start the Hunt
      </button>
    </div>
  );
}
