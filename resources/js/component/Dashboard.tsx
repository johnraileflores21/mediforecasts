import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 57 , 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const pieData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart',
            },
        },
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-48 block rounded-lg bg-blue-500 p-4 shadow-md dark:bg-neutral-700 mb-4">
                    <h5 className="mb-2 text-lg font-medium leading-tight text-white dark:text-neutral-50">

                    </h5>
                 <p className="mb-4 text-sm text-white dark:text-neutral-200">
                    
                 </p>
                    {/*<button
                    type="button"
                    className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700">
                    Button
                    </button> */}
                </div>
                <div className="w-full h-48 block rounded-lg bg-blue-500 p-4 shadow-md dark:bg-neutral-700 mb-4">
                    <h5 className="mb-2 text-lg font-medium leading-tight text-white dark:text-neutral-50">

                    </h5>
                 <p className="mb-4 text-sm text-white dark:text-neutral-200">
                    
                 </p>
                    {/*<button
                    type="button"
                    className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700">
                    Button
                    </button> */}
                </div>
                <div className="w-full h-48 block rounded-lg bg-blue-500 p-4 shadow-md dark:bg-neutral-700 mb-4">
                    <h5 className="mb-2 text-lg font-medium leading-tight text-white dark:text-neutral-50">

                    </h5>
                 <p className="mb-4 text-sm text-white dark:text-neutral-200">
                    
                 </p>
                    {/*<button
                    type="button"
                    className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700">
                    Button
                    </button> */}
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Data Visualization</h2>
                <div className="bg-white p-4 rounded-lg shadow-md flex justify-between">
                    <div className="w-1/2  p-2">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                    <div className="w-1/3 p-2">
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
