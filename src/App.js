import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import View from "./View";
import InputForm from "./Form";
import { getDatabase, onValue, ref } from "firebase/database";

const App = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const eventsRef = ref(db, "events");

    return onValue(eventsRef, snapshot => {
      setEventsData(Object.values(snapshot.val()));
    });
  }, []);

  return (
    <>
      <div id="sidebar">
        <Link to="/">View</Link>
        <Link to="/form">Form</Link>
      </div>
      <div id="content">
        <Routes>
          <Route path="/" element={<View eventsData={eventsData} />} />
          <Route path="/form" element={<InputForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
