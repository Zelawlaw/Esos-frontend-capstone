import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import axios from 'axios';


 
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:8080/api/v1/',
      timeout: 1000,
      headers: {'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`}
    });
    
    const getIncidents = async () => {
      try {
        const response = await instance.get('getincidents');
        console.log(JSON.stringify(response.data));
        return response.data;
      } catch (error) {
        console.error('Failed to fetch incidents', error);
        return null;
      }
    };

    getIncidents().then(data => {
      setData(data);
    }).catch(error => {
      console.log(error);
    });

  }, []);

  if (!data) {
    return "Loading...";
  }

  const { personalIncidents, reporteeIncidents } = data;

  return (
    <div className='px-3'>
      <Nav />
      <div className='container-fluid'>
        {/* The rest of your content goes here, this is where you could use the getIncidentSummary data */}
      </div>

      {personalIncidents && personalIncidents.length > 0 && (
        <table className="table table-hover caption-top bg-white rounded mt-2">
          <caption className='text-white fs-4'> My Cases</caption>
          <thead>
            <tr>
              <th scope="col">#Case ID</th>
              <th scope="col">Submitter</th>
              <th scope="col">Date</th>
              <th scope="col">Notes</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {personalIncidents.map((incident, index) => (
              <tr key={index}>
                <th scope="row">{incident.incidentID}</th>
                <td>{incident.reporter}</td>
                <td>{new Date(incident.reportedtime).toLocaleDateString()}</td>
                <td>{incident.description}</td>
                <td>{incident.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {reporteeIncidents && reporteeIncidents.length > 0 && (
        <table className="table table-hover caption-top bg-white rounded mt-2">
          <caption className='text-white fs-4'> Reportee Cases</caption>
          <thead>
            <tr>
              <th scope="col">#Case ID</th>
              <th scope="col">Submitter</th>
              <th scope="col">Date</th>
              <th scope="col">Notes</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {reporteeIncidents.map((incident, index) => (
              <tr key={index}>
                <th scope="row">{incident.incidentID}</th>
                <td>{incident.reporter}</td>
                <td>{new Date(incident.reportedtime).toLocaleDateString()}</td>
                <td>{incident.description}</td>
                <td>{incident.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {(!personalIncidents || personalIncidents.length === 0) && (!reporteeIncidents || reporteeIncidents.length === 0) && (
        <p>No Incidents to display!</p>
      )}
    </div>
  );
}

export default Home;
