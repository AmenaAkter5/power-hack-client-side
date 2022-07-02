import React from 'react';

const UpdateBill = ({ singleBill, setSingleBill }) => {

    const handleUpdateBill = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const amount = event.target.amount.value;

        const updatedItem = {
            name,
            email,
            phone,
            amount
        };


        // update data to server
        const url = `https://power-hack-superb.herokuapp.com/api/update-billing/${singleBill._id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
            })


        event.target.reset();
        setSingleBill(null);


    }


    return (
        <div>
            <input type="checkbox" id="update-bill" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-bill" className="btn btn-sm btn-circle absolute right-2 top-2 font-bold text-white">✕</label>
                    <h3 className="font-bold text-lg text-primary">Update Your Bill</h3>
                    <form onSubmit={handleUpdateBill} className='grid grid-cols-1 gap-4 justify-items-center mt-6'>

                        <input required type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />

                        <input required type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />

                        <input required type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input required type="number" name='amount' placeholder="Paid Amount" className="input input-bordered w-full max-w-xs" />

                        <input required type="submit" value='Submit' className="btn btn-primary text-white w-full max-w-xs font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBill;