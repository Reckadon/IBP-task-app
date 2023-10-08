import React from "react";
import "./View.css";

const View = ({ eventsData, handleDelete }) => {
  return (
    <div>
      {eventsData ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Number of Teams</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.time}</td>
                <td>{event.numberOfTeam}</td>
                <td className="delete" onClick={() => handleDelete(index)}>
                  delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
};

export default View;
