import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../state/state";

export default function Clue4() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Protect this clue from being accessed before Clue 3
  useEffect(() => {
    if (!state.isUnlocked(3)) {
      navigate("/clue3"); // Redirect to the last unlocked clue
    }
  }, []);

  const handleSubmit = () => {
    if (input === "mUST_liV3_") {
      state.unlockClue(4);
      navigate("/clue5");
    } else {
      setError("❌ Incorrect flag part.");
    }
  };

  return (
    <div className="clue-page">
      <h1>Clue 4: Bonding Moments</h1>
      <p>
        "Families are not only built in events, <br />
        but in laughter during breaks, <br />
        and water shared on long days. <br />
        Here, in the simplest moments, <br />
        our bond becomes unshakable."
      </p>

      <p><b>Ciphered Clue (Base32):</b> O5QXIZLSEBZGKZTJNQQHG5DBORUW63RAONQSAY3BMY======</p>

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
