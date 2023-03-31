import { useState } from "react";

export default function AddControllerForm() {
  const [controls, setControls] = useState([{ type: "text", value: "" }]);

  const handleAddControl = (event) => {
    event.preventDefault();
    const auxControls = [...controls];
    auxControls.push({ type: "text", value: "" });
    setControls(auxControls);
  };

  const handleControl = (event, index) => {
    const auxControls = [...controls];
    auxControls[index].value = event.target.value;
    setControls(auxControls);
    console.log(auxControls[index].value);
  }

  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "10px",
        }}
      >
        {controls.map((control, index) => (
          <div key={index}>
            <label>Control {index + 1}</label>
            <input type={control.type} value={control.value} onChange={(e) => handleControl(e, index)} />
          </div>
        ))}
        <button type="submit" onClick={handleAddControl}>
          Add Control
        </button>
      </div>
    </form>
  );
}
