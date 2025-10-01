import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../state/state";

export default function Clue2() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Protect this clue from being accessed before Clue 1
  useEffect(() => {
    if (!state.isUnlocked(1)) {
      // Redirect to the last unlocked clue or home
      navigate("/"); // or navigate("/clue1") if you prefer
    }
  }, []);

  const handleSubmit = () => {
    if (input === "SoCIT_") {
      state.unlockClue(2);
      navigate("/clue3");
    } else {
      setError("❌ Incorrect flag part.");
    }
  };

  return (
    <div className="clue-page">
      <h1>Clue 2: Value in Everyone</h1>
      <p>
        "Even the things cast aside <br />
        still have stories, still have pride. <br />
        In our family, nothing’s wasted— <br />
        every voice, every heart, is celebrated."
      </p>

      <p><b>Ciphered Clue (Caesar +3):</b> wudvkfdq</p>

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
