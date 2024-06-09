import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { auth, db } from '../firebase';
import { collection, doc, setDoc, getDocs, DocumentData, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        middlename: '',
        age: '',
        email: '',
        phone: '',
        password: ''
    });

    const [userData, setUserData] = useState<DocumentData[]>([]);

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUserData(userData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const now = new Date();
        const docId = now.toISOString();
        try {
            const docRef = doc(collection(db, "users"), docId); 
            await setDoc(docRef, formData);
            console.log("Document written with ID: ", docId); 
            setFormData({
                firstname: '',
                lastname: '',
                middlename: '',
                age: '',
                email: '',
                phone: '',
                password: ''
            });
            fetchData();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleEdit = async (id: string) => {
       
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, "users", id));
            console.log("Document deleted successfully!");
            fetchData();
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };
    return (
        <div className="bg-gray-100">
            <form className="space-y-4" onSubmit={handleSubmit}>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 custom-img">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-5 md:p-16">
                <div className="mb-6">
                    <span className="block mb-3 text-4xl font-bold">Create an account</span>
                    <span className="block font-light text-gray-400">Please fill out the form</span>
                </div>
                
                <div className="flex flex-col space-y-6 max-h-[400px] overflow-y-auto">
                    <div className="form-control">
                        <label className="label" htmlFor="firstname">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder='Enter Firstname'
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label" htmlFor="middlename">
                            <span className="label-text">Middle Name</span>
                        </label>
                        <input
                            type="text"
                            id="middlename"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.middlename}
                            onChange={handleChange}
                            placeholder='Enter Middlename'
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label" htmlFor="lastname">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder='Enter Lastname'
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label" htmlFor="age">
                            <span className="label-text">Age</span>
                        </label>
                        <input
                            type="number"
                            id="age"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder='Enter Age'
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Email Address'
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label" htmlFor="phone">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter Phone Number'
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered w-full md:w-80 p-2 border border-gray-300 rounded-md"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter Password'
                            required
                        />
                    </div>
                    
                    <button type="submit" className="w-full bg-black text-white p-3 rounded-lg mb-6 mt-6 hover:bg-white hover:text-black hover:border hover:border-gray-400">Sign up</button>
                </div>
                <div className="mt-7 ml-5 text-gray-400">
                        Already have an account?  
                        <a href="/" className="font-bold text-green-500"> Login Now</a>
                </div>
            </div>

            <div className="relative">
                <img className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' src="images/rurallogo.jpg" alt='/'></img>
                </div><div className="relative hidden md:block">
             
            </div>
        </div>
    </div>
</form>

<div className="flex items-center justify-center mt-8">
    <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-300">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">First Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Last Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Middle Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Phone Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Password</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {userData.map((user, index) => (
                    <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{user.firstname}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.lastname}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.middlename}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.password}</td>
                        <td>
                            <button onClick={() => handleEdit(user.id)} className="bg-blue-500 text-white p-2 hover:bg-blue-700 mr-4">Edit</button>
                            <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white p-2 hover:bg-red-700">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>


            
        </div>
       
    );
};

export default Register;
