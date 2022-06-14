import React, { useState } from "react";
// import Tables from './Tables';

const AddMachines = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [inputNameMachines, setInputNameMachines] = useState('');
    const [inputLocationMachines, setInputLocationMachines] = useState('');
    const [visibility, setVisibility] = useState('invisible');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMachines = {
            id: props.machines.length + 1,
            name: inputNameMachines,
            location: inputLocationMachines,
            status: 'Online'
        } 
        if(newMachines.name && newMachines.location !== ''){
            props.onCreateMachine(newMachines)
            setInputNameMachines('');
            setInputLocationMachines('');   
            setShowModal(false);
        } else {
            setVisibility('visible')
        }
    }
    const handleNameChange = (e) => {
        setInputNameMachines(e.target.value);
        
    }
    const handleLocationChange = (e) => {
        setInputLocationMachines(e.target.value);
    }
    const handleClose = () => {
        setShowModal(false); 
        setVisibility('invisible'); 
        setInputNameMachines(''); 
        setInputLocationMachines('');
    }
    return (
        <>
        <button
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            onClick={() => setShowModal(true)}
        >
            + Add
        </button>
        {showModal ? (
            <>
            <div className="fixed  bg-white/75 border-red z-50 mx-auto top-24 bottom-10 right-0 left-0">
                <div className="relative mt-16 mx-auto p-4 w-full max-w-md h-full md:h-auto">
                <div className="border-2 border-gray-200 relative bg-white rounded-lg shadow-md dark:bg-gray-700">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="mx-auto text-3xl font=semibold">Add Machine</h3>
                    <div className="flex cursor-pointer" onClick={handleClose}>
                        <button
                            className="text-center bg-transparent border-0 text-black float-right">
                        </button>
                        <span className="relative text-black opacity-7 h-6 w-6 text-sm bg-gray-200 rounded-full text-center hover:bg-gray-300">
                        x
                        </span>
                    </div>
                    </div>
                    <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-1">
                        Machine Name
                        </label>
                        <input onChange={handleNameChange} value={inputNameMachines} className="hover:border-sky-400 focus:ring-1 focus:outline-none focus:border-sky-500 shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Nama Mesin" type="text" />
                        <label className="mt-4 block text-black text-sm font-bold mb-1">
                        Location
                        </label>
                        <input onChange={handleLocationChange} value={inputLocationMachines} className="hover:border-sky-400 focus:ring-1 focus:outline-none focus:border-sky-500 shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Nama Lokasi" type="text"/>
                        <div className={visibility}>
                            <div className="mt-2">
                                <span className="font-semibold text-red-500">Nama atau Lokasi tidak boleh kosong</span>
                            </div>
                        </div>
                        <button className="hidden" type="submit">
                        </button>
                    </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="text-white bg-blue-700 active:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-blue-800 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </>
        ) : null}
        </>
    );
};

export default AddMachines;