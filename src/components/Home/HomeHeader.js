import React, { useState } from 'react';
import AddBill from './AddBill';

const HomeHeader = () => {


    const [addBill, setAddBill] = useState(false);

    const handleShow = () => setAddBill(true);

    return (

        <div>
            <div className='flex justify-between items-center p-2 w-11/12 mx-auto mt-12 mb-6 bg-secondary'>
                <div className='flex items-center'>
                    <h3 className='px-8 text-xl text-white font-bold'>Billings</h3>
                    <div className="form-control">
                        <div className="input-group h-4/5">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-small text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="add-bill" className="btn btn-wide text-white font-bold" onClick={handleShow}>Add New Bill</label>
                </div>
            </div>
            {
                addBill && <AddBill
                    addBill={addBill}
                    setAddBill={setAddBill}
                ></AddBill>
            }
        </div>
    );
};

export default HomeHeader;