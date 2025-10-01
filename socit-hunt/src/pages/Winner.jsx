import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../state/state";

export default function Winner() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Protect Winner page from being accessed before Clue 5
  useEffect(() => {
    if (!state.isUnlocked(5)) {
      navigate("/clue5"); // Redirect to the last unlocked clue
    }
  }, []);

  const handleSubmit = () => {
    if (input === "SOCIT{th3_SoCIT_sp1r1t_mUST_liV3_ON!}") {
      setMessage("🎉 YOU ARE THE WINNER! 🎉");
    } else {
      setMessage("❌ Wrong flag, try again.");
    }
  };

  return (
    <div className="clue-page">
      <h1>Final Challenge</h1>
      <p>Combine all the pieces you’ve collected into the full flag.</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter full flag..."
      />
      <button onClick={handleSubmit}>Submit</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
