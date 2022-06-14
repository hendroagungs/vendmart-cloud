import React, { useState } from 'react';
import AddMachines from './AddMachines'

export default function Tables(){
    const [machines, setMachines] = useState([
        { id:'1', name: 'A', location: 'TA10', status: 'Online' },
        { id:'2', name: 'B', location: 'TA10', status: 'Online' },
        { id:'3', name: 'C', location: 'TA03', status: 'Offline' },
        { id:'4', name: 'BPD Jateng', location: 'Semarang', status: 'Online' },
        { id:'5', name: 'CIMB Niaga', location: 'Tanah Abang', status: 'Online' },
    ]);
    const onCreateMachine = (machine) => {
        setMachines(machines.concat(machine))
        console.log(machine)
    }
    const deleteMachine = (e) => {
        const name = e.target.getAttribute('name')
        setMachines(machines.filter(machine => machine.name !== name));
    }
        return(
            <div className='Tables'>

            <div className="mx-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Machine ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Machine Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <AddMachines machines={machines} onCreateMachine={onCreateMachine}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { machines.map((machine) => (
                            <tr key={machine.id} className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    T000{machine.id}
                                </th>
                                <td className="px-6 py-4">
                                    Vending Machine {machine.name}
                                </td>
                                <td className="px-6 py-4">
                                    {machine.location}
                                </td>
                                <td className="px-6 py-4">
                                    {machine.status}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" name={machine.name} onClick={deleteMachine} data-modal-toggle="popup-modal">
                                    Delete
                                    </button>
                                    <div id="popup-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                                </button>
                                                <div className="p-6 text-center">
                                                    <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                                    <button data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                        Yes, I'm sure
                                                    </button>
                                                    <button data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}