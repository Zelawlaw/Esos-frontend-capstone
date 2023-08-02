import React from "react";
import { Modal, Button } from "react-bootstrap";

function Logs({ show, handleClose, logs, incidentId }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Logs for Incident {incidentId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {logs ? (
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
        ) : (
          <div>No logs available for this incident.</div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Logs;
