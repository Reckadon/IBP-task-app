import React, { useState } from "react";
import "./Form.css";
import { getDatabase, ref, set } from "firebase/database";
const InputForm = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("08:00");
  const [numTeams, setNumTeams] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || numTeams === 0) return;
    const db = getDatabase();
    set(ref(db, "events/" + name), {
      name: name,
      time: time,
      numberOfTeam: numTeams,
    });
    setName("");
    setNumTeams(0);
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form title="Add Event" onSubmit={handleSubmit}>
        <div className="formRow">
          <label> Event Name </label>
          <input
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="formRow">
          <label>Time</label>
          <input
            value={time}
            onChange={e => {
              setTime(e.target.value);
            }}
            type="time"
          />
        </div>
        <div className="formRow">
          <label>Number of Teams</label>
          <input
            value={numTeams}
            onChange={e => {
              setNumTeams(e.target.value);
            }}
            type="number"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputForm;
