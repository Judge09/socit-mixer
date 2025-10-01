import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../state/state";

export default function Clue5() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Protect this clue from being accessed before Clue 4
  useEffect(() => {
    if (!state.isUnlocked(4)) {
      navigate("/clue4"); // Redirect to the last unlocked clue
    }
  }, []);

  const handleSubmit = () => {
    if (input === "ON!}") {
      state.unlockClue(5);
      navigate("/Winner");
    } else {
      setError("❌ Incorrect flag part.");
    }
  };

  return (
    <div className="clue-page">
      <h1>Clue 5: Unity & Home of Orgs</h1>
      <p>
        "Behind this door are not just officers, <br />
        but brothers and sisters with one dream. <br />
        A home where visions meet and grow— <br />
        for the SOCIT spirit is family, <br />
        and family never ends."
      </p>

      <p><b>Ciphered Clue (ROT13):</b> FNB ybhatr</p>

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
