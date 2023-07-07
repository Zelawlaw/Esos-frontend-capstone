import React from 'react'
import Nav from './Nav'

function Home() {
  return (    
    <div className='px-3'>
    <Nav />
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <p className='fs-2'>All</p>
                            <h3 className='fs-2'>6</h3>
                            
                        </div>
                        <i className='bi bi-circle-fill p-3 fs-1 text-danger'></i>
                    </div>
                </div>

                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <p className='fs-2'>Active</p>
                            <h3 className='fs-2'>3</h3>
                            
                        </div>
                        <i className='bi bi-circle-fill p-3 fs-1 text-warning'></i>
                    </div>
                </div>

                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <p className='fs-2'>Pending</p>
                            <h3 className='fs-2'>2</h3>
                            
                        </div>
                        <i className='bi bi-circle-fill p-3 fs-1 text-warning'></i>
                    </div>
                </div>

                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <p className='fs-2'>Resolved</p>
                            <h3 className='fs-2'>1</h3>
                            
                        </div>
                        <i className='bi bi-circle-fill p-3 fs-1 text-success'></i>
                    </div>
                </div>
            </div>

        </div>
            <table class="table table-hover caption-top bg-white rounded mt-2">
                <caption className='text-white fs-4'> Active Cases</caption>
    <thead>
        <tr>
        <th scope="col">#Case ID</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Email</th>
        <th scope="col">Submitter</th>
        <th scope="col">Date</th>
        <th scope="col">Notes</th>
        <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>mark@example.com</td>
        <td>Hellen</td>
        <td>5/6/2023</td>
        <td>Medical case</td>
        <td>Active</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>Jacob@example.com</td>
        <td>Lawrence</td>
        <td>5/6/2023</td>
        <td>Burglary</td>
        <td>Active</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>James</td>
        <td>Miller</td>
        <td>james@example.com</td>
        <td>Reuben</td>
        <td>5/6/2023</td>
        <td>Hijacking</td>
        <td>Active</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Susan</td>
        <td>Bori</td>
        <td>Subri@example.com</td>
        <td>Chris</td>
        <td>7/6/2023</td>
        <td>Medical case</td>
        <td>Pending</td>
        </tr>
        <tr>
        <th scope="row">1</th>
        <td>Pyllis</td>
        <td>Mata</td>
        <td>PM@example.com</td>
        <td>Hellen</td>
        <td>8/6/2023</td>
        <td>Burglary</td>
        <td>Resolved</td>
        </tr>
        <tr>
        <th scope="row">1</th>
        <td>Joanna</td>
        <td>Mila</td>
        <td>JMila@example.com</td>
        <td>Hellen</td>
        <td>9/6/2023</td>
        <td>Medical case</td>
        <td>Pending</td>
        </tr>
    </tbody>
    </table>
    </div>
   
  )
}

export default Home