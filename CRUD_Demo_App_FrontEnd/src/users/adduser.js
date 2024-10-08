import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Adduser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onSubmit = async (e) => {
        e.preventDefault();

        // Basic validation: Check if all fields are filled
        if (!name || !username || !email) {
            alert('All fields are required.');
            return;
         }

        // Email validation
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            await axios.post("http://localhost:8080/user", user);
            navigate("/");
        } catch (error) {
            console.error('There was an error!', error);
            // Optionally, display an error message to the user
        }
    };

    const handleCancel = () => {
        // Reset form data
        setUser({ name: '', username: '', email: '' });
        // Navigate to the home page or another route
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Enter your name'
                                name='name' 
                                value={name} 
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Username" className='form-label'>Username</label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Username here'
                                name='username' 
                                value={username} 
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Email" className='form-label'>Email Id</label>
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Your Email Id here'
                                name='email' 
                                value={email} 
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <button type="button" onClick={handleCancel} className='btn btn-outline-danger mx-2'>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
