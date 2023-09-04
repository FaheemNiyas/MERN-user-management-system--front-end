import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Create() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Age: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        axios.post(`http://localhost:4000/api/createUser`, formData)
            .then((res) => {
                setSuccessMessage('User created successfully');
                setErrorMessage('');

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                setSuccessMessage('');
                setErrorMessage('Failed to create user');
                console.log(err);
            });
    };

    return (
        <div className='mt-5'>
            <div className='container d-flex justify-content-center pt-5'>
                <form className='card shadow p-5 mt-5' onSubmit={handleSubmit}>
                    <h4 className='pb-3 text-center'>Create User</h4>
                    {successMessage && (
                        <div className="alert alert-success">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                    )}

                    <div className="mb-3">
                        <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Name" onChange={handleInputChange} value={formData.Name} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} value={formData.Email} />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="Age" placeholder="Age" onChange={handleInputChange} value={formData.Age} />
                    </div>
                    <button type="submit" className="btn btn-outline-primary mb-3">Create</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
