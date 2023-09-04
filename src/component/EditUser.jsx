import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function EditUser() {

    const [users, setUsers] = useState([]);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:4000/api/viewusers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:4000/api/delete/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
            setShowDeleteAlert(true);
            setTimeout(() => {
                window.location.reload();
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center '>
            <div className='w-50 border shadow'>
                {showDeleteAlert && (
                    <div className="alert alert-danger fade show" role="alert">
                        User deleted successfully!
                    </div>
                )}
                <table className="table text-center p-2">
                    <thead className='table-light border'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td><button className="btn btn-info btn-sm">Edit</button></td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default EditUser;
