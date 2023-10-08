import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import View from "./View";
import InputForm from "./Form";
import { getDatabase, onValue, ref, remove } from "firebase/database";

const App = () => {
  const [eventsData, setEventsData] = useState(null);

  const db = getDatabase();
  useEffect(() => {
    const eventsRef = ref(db, "events");
    return onValue(eventsRef, snapshot => {
      setEventsData(snapshot.exists() ? Object.values(snapshot.val()) : null);
    });
  }, [db]);

  const handleDelete = index => {
    const eventRef = ref(db, "events/" + eventsData[index].name);
    remove(eventRef);
  };

  return (
    <>
      <div id="sidebar">
        <Link to="/">View</Link>
        <Link to="/form">Form</Link>
      </div>
      <div id="content">
        <Routes>
          <Route
            path="/"
            element={
              <View eventsData={eventsData} handleDelete={handleDelete} />
            }
          />
          <Route path="/form" element={<InputForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
