import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../state/state";

export default function Clue1() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input === "SOCIT{th3_") {
      state.unlockClue(1);
      navigate("/clue2");
    } else {
      setError("❌ Incorrect flag part. Try again.");
    }
  };

  return (
    <div className="clue-page">
      <h1>Clue 1: The Beginning</h1>
      <p>
        "Every family has a hearth, <br />
        ours is lit by circuits and code. <br />
        Not just machines, but the spirit of home— <br />
        where anyone who enters is free to grow."
      </p>

      <p><b>Ciphered Clue (Base64):</b> U09DSVR7dGhlM18=</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter flag part..."
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
