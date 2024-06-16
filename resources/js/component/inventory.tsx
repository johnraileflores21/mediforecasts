import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { auth, db } from '../firebase';
import { collection, doc, setDoc, getDocs, DocumentData, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [userData, setUserData] = useState<DocumentData[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Medicines"));
            const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUserData(userData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    {/*const handleEdit = async (id: string) => {
        // Edit logic here
    }; */}

    const handleDelete = async (id: string) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        if (deleteId) {
            try {
                await deleteDoc(doc(db, "Medicines", deleteId));
                console.log("Document deleted successfully!");
                fetchData();
            } catch (error) {
                console.error("Error deleting document: ", error);
            } finally {
                setShowModal(false);
                setDeleteId(null);
            }
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setDeleteId(null);
    };

    const filteredData = userData.filter(medicine =>
        medicine.medicineName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.medicineDescription.toLowerCase().includes(searchQuery.toLowerCase())
        
    );

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
            <h1 className="text-xl text-center font-bold">Medicine</h1>
            <div className="flex justify-between mb-4">
                <Link to="/inventory/add" className="bg-green-500 text-white p-2 hover:bg-green-700 rounded-md font-bold flex items-center space-x-1">
            <img src="/images/add.png" alt="Add Icon" className="w-5 h-5" />
            <span>Add</span>
        </Link>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className="border border-gray-300 rounded-md p-2 pl-8" 
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" 
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
</div>
            </div>
           
            <div className="bg-white p-4 rounded-lg shadow-md mt-8">
                <div className="flex items-center justify-center mt-5">
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Medicine Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Stock</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Expiration</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.map((medicine) => (
                                <tr key={medicine.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{medicine.medicineName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{medicine.medicineStock} box</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{medicine.medicineDescription}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{medicine.medicineExpiration}</td>
                                    <td>
                                        <div className="flex items-center">
                                            <Link to={`/edit/${medicine.id}`} className="bg-yellow-800 rounded-md text-white p-2 hover:bg-yellow-900 mr-4 flex items-center space-x-1">
                                                <img src="/images/edit.png" alt="Edit Icon" className="w-5 h-5" />
                                                <span>Edit</span>
                                            </Link>
                                            <button onClick={() => handleDelete(medicine.id)} className="bg-red-500 rounded-md text-white p-2 hover:bg-red-700 flex items-center space-x-1">
                                                <img src="images/delete.png" alt="Delete Icon" className="w-5 h-5" />
                                                <span>Delete</span>
                                            </button>
                                     </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                            Delete Medicine Confirmation
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete this medicine?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={confirmDelete}
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Yes, Delete
                                </button>
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default Inventory;
