import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Link } from 'react-router-dom';

function Request() {
  return (
    <DashboardLayout>
      <div className="bg-white p-4 rounded-lg shadow-md mt-8">
        <div className="flex items-center justify-center mt-5">
          <div className="w-full">
            <div className="overflow-y-auto overflow-x-auto" style={{ maxHeight: '400px', maxWidth: "1040px" }}>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">First Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Middle Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Last Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Barangay</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Medicine Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Medicine Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Hi</td>
                    <td className="px-6 py-4 whitespace-nowrap">Hello</td>
                    <td className="px-6 py-4 whitespace-nowrap">Whats up</td>
                    <td className="px-6 py-4 whitespace-nowrap">Im okay</td>
                    <td className="px-6 py-4 whitespace-nowrap">Im okay</td>
                    <td className="px-6 py-4 whitespace-nowrap">Im okay</td>
                    <td className="px-6 py-4 whitespace-nowrap">Im okay</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                                <button className="bg-blue-500 rounded-md text-white p-2 hover:bg-blue-700 mr-4 flex items-center space-x-1">
                                <img src="/images/check.png" alt="Approve Icon" className="w-5 h-5" />
                                <span>Approve</span>
                                </button>
                                <button className="bg-red-500 rounded-md text-white p-2 hover:bg-red-700 flex items-center space-x-1">
                                <img src="/images/wrong.png" alt="Decline Icon" className="w-5 h-5" />
                                <span>Decline</span>
                                </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Request;
