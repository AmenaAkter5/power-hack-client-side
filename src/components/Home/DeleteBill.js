import React from 'react';

const DeleteBill = ({ singleBill, setSingleBill, bills, setBills }) => {

    // handle delete button
    const handleDelete = id => {

        const url = `https://power-hack-superb.herokuapp.com/api/delete-billing/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = bills.filter(bill => bill._id !== id);
                setBills(remaining);
                setSingleBill(null)
            });

    };

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <h3 className="font-bold text-lg">Hello,</h3>

                    <p className="py-4">Are You Sure to <span className='text-red-600 font-bold'>Delete</span> <span className='text-primary font-bold'>{singleBill.name}</span>'s Bill?</p>

                    <div className="modal-action flex justify-center">
                        <label onClick={() => handleDelete(singleBill._id)} className='btn btn-error text-white font-bold w-50'>Yes</label>
                        <label htmlFor="delete-modal" className="btn btn-primary text-white font-bold w-50">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBill;