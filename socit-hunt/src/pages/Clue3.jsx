import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../state/state";

export default function Clue3() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Protect this clue from being accessed before Clue 2
  useEffect(() => {
    if (!state.isUnlocked(2)) {
      navigate("/clue2"); // Redirect to the last unlocked clue
    }
  }, []);

  const handleSubmit = () => {
    if (input === "sp1r1t_") {
      state.unlockClue(3);
      navigate("/clue4");
    } else {
      setError("❌ Incorrect flag part.");
    }
  };

  return (
    <div className="clue-page">
      <h1>Clue 3: Courage Together</h1>
      <p>
        "A family means lifting each other, <br />
        to step out and shine with courage. <br />
        On this stage, we are never alone— <br />
        for hands and hearts stand beside us."
      </p>

      <p><b>Ciphered Clue (Bacon):</b> baaaa abaaa aabba aabbb baaba baaab abaaa aaabb aabaa abbab aabab baaba aabbb aabaa baaab baaba aaaaa aabba aabaa</p>

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
