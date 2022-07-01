import React from 'react';

const AddBill = ({ setAddBill }) => {


    const handleAddBill = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const amount = event.target.amount.value;

        const bill = {
            name,
            email,
            phone,
            amount
        }


        fetch('http://localhost:5000/api/add-billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bill)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    // toast(`Appointment is set`)
                }

                else {
                    // toast.error(`Already have an appointment on`)
                }

                // to close the modal
                setAddBill(false);
            })


    }



    return (
        <div>
            <input type="checkbox" id="add-bill" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-bill" className="btn btn-sm btn-circle absolute right-2 top-2 font-bold text-white">✕</label>
                    <h3 className="font-bold text-lg text-primary">Add a New Bill</h3>
                    <form onSubmit={handleAddBill} className='grid grid-cols-1 gap-4 justify-items-center mt-6'>

                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />

                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />

                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="number" name='amount' placeholder="Paid Amount" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value='Submit' className="btn btn-primary text-white w-full max-w-xs font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBill;