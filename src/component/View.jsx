import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function View() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/viewusers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center '>
            <div className='w-50 border shadow'>
                <table className="table text-center p-2">
                    <thead className='table-light border'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"> Email</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr >
                                    <th scope="row">{index+1}</th>
                                    <td >{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default View