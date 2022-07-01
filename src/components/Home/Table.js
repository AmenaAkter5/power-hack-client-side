import React, { useEffect, useState } from 'react';


const Table = () => {

    const [bills, setBills] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/api/billing-list`)

            .then(res => {

                if (res.status === 401 || res.status === 403) {

                    /* signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/'); */
                }

                return res.json();
            })

            .then(data => {
                setBills(data)
            })

    }, [bills]);

    return (
        <div class="overflow-x-auto w-11/12 mx-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Billing Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bills.map((bill, index) => <tr key={index}>
                            <th>{bill._id}</th>
                            <td>{bill.name}</td>
                            <td>{bill.email}</td>
                            <td>{bill.phone}</td>
                            <td>{bill.amount}</td>
                            <td>
                                {/* {(bill.price && !bill.paid) && <p className=' text-red-600 font-bold'>Unpaid</p>}
                                {(bill.price && bill.paid && !bill.shipment) && <div>
                                    <span className='text-green-600 font-bold'>Pending</span>
                                    <p>Transaction Id: <span className='text-orange-600'>{bill.transactionId}</span></p>
                                </div>}
                                {(bill.price && bill.paid && bill.shipment) && <div>
                                    <p className='text-primary font-bold'>Shipped</p>
                                </div>} */}
                            </td>
                            <td>
                                {/* {(bill.price && bill.paid && !bill.shipment) && <button
                                    onClick={() => handleShipment(bill._id)}
                                    className='btn btn-xs btn-primary text-white font-bold'>Shipment</button>}
                                {
                                    (bill.price && !bill.paid && !bill.shipment) &&
                                    <label htmlFor="delete-modal" onClick={() => setOrder(bill)} className='btn btn-xs btn-error text-white font-bold'>Cancel</label>
                                } */}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;