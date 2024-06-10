import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';
import Add from './Add';
import Edit from './Edit';
import Inventory from './inventory';
import Request from './Request';
import { db } from '../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        const dbRef = collection(db, 'users');
        try {
            const combinedQuery = query(dbRef, where('email', '==', email), where('password', '==', password));
            const querySnapshot = await getDocs(combinedQuery);

            if (!querySnapshot.empty) {
                console.log("Login successful");
                navigate('/dashboard');
                alert("Login successful");
            } else {
                console.error("Invalid email or password");
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Error logging in. Please try again later.");
        }
    };

    return (
     
        <div className="flex items-center justify-center min-h-screen bg-gray-100 custom-img  ">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Welcome back</span>
                    <span className="font-light text-gray-400 mb-8">Welcome back! Please enter your details</span>
                    <div className="py-4">
                        <span className="mb-2 text-md">Email</span>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-md">Password</span>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between w-full py-4">
                        <div className="mr-24">
                            <input type="checkbox" id="remember" className="mr-2"/>
                            <span className="text-md">Remember Me</span>
                        </div>
                        <button className="font-bold text-md text-green-500">Forgot password</button>
                    </div>
                    <button
                        onClick={login}
                        className="w-full bg-black text-center text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                    >
                        Sign in
                    </button>
                    <div className="text-center text-gray-400">
                        Don't have an account?  
                        <Link to="/register" className="font-bold text-green-500"> Sign up Now</Link>
                    </div>
                </div>
                <div className="relative">
                <img className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' src="images/rurallogo.jpg" alt='/'></img>
                </div>
            </div>
        </div>
     
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/inventory/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/request" element={<Request />} />
            </Routes>
        </Router>
    );
};

export default App;
