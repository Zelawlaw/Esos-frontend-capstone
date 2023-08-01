import React from 'react';
import { useLocation } from 'react-router-dom';

function Logs() {
  const location = useLocation();
  const logs = location.state.logs;
  const incidentId = location.state.incidentId;

  return (
    <div>
      <h2>Logs for Incident {incidentId}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Incident Update</th>
            <th>Update Time</th>
            <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
          {logs
            .sort((a, b) => new Date(b.updatetime) - new Date(a.updatetime))
            .map((log, index) => (
              <tr key={index}>
                <td>{log.incidentUpdate}</td>
                <td>{new Date(log.updatetime).toLocaleString()}</td>
                <td>{log.updatedby}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};


export default Logs;
