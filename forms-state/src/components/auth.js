import { useState } from "react";

export default function DynamicForm() {
  const [username, setUsername] = useState("");
  const [prevExperience, setPrevExperience] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasExperience, setHasExperience] = useState(false);

  const handleUsername = (event) => {
    event.preventDefault();
    const text = event.target.value;
    setUsername(text);
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    const text = event.target.value;
    setEmail(text);
    if (/\S+@\S+\.\S+/.test(text)) {
      setEmailError(false);
      setIsDisabled(false);
    } else {
      setEmailError(true);
      setIsDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const handleExperience = (event) => {
    const exp = event.target.checked;
    setHasExperience(exp);
    if(!exp) setPrevExperience('');
  };

  const handlePrevExperience = (event) => {
    const text = event.target.value;
    setPrevExperience(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <div>
          <input
            type="checkbox"
            id="experience"
            name="experience"
            checked={hasExperience}
            onChange={handleExperience}
          />
          <label htmlFor="experience">Previous experience</label>
        </div>
        {hasExperience && (
          <input
            type="text"
            name="prevExperience"
            placeholder="Previous Experience"
            value={prevExperience}
            onChange={handlePrevExperience}
          />
        )}
        <button type="submit" disabled={emailError || isDisabled}>
          Save!
        </button>
      </div>
    </form>
  );
}
