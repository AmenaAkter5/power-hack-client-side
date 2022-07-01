import React, { useEffect, useState } from 'react';
import DeleteBill from './DeleteBill';
import UpdateBill from './UpdateBill';


const Table = ({ addBill, setAddBill, handleShow }) => {

    const [bills, setBills] = useState([]);

    const [singleBill, setSingleBill] = useState(null);

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

    }, [bills, singleBill]);


    return (
        <div>
            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table w-full">
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
                                    <label htmlFor="add-bill" className="btn btn-sm mr-5 font-bold text-white" onClick={() => setSingleBill(bill)}>Edit</label>
                                    <label htmlFor="delete-modal" onClick={() => setSingleBill(bill)} className="btn btn-sm btn-error font-bold">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                singleBill && <UpdateBill
                    singleBill={singleBill}
                    addBill={addBill}
                    setAddBill={setAddBill}
                    setSingleBill={setSingleBill}
                ></UpdateBill>
            }
            {
                singleBill && <DeleteBill
                    singleBill={singleBill}
                    bills={bills}
                    setBills={setBills}
                    setSingleBill={setSingleBill}
                ></DeleteBill>
            }
        </div>
    );
};

export default Table;