import React, { useEffect, useState } from 'react';
import AddBill from './AddBill';
import DeleteBill from './DeleteBill';
import UpdateBill from './UpdateBill';

const HomeHeader = ({ addBill, setAddBill, handleShow }) => {

    // const [bills, setBills] = useBills();

    const [bills, setBills] = useState([]);

    const [singleBill, setSingleBill] = useState(null);

    // pageCount state
    const [pageCount, setPageCount] = useState(0);
    // page size
    const [pageSize, setPageSize] = useState(10);
    // exist page
    const [existPage, setExistPage] = useState(0);

    // data load for pagination
    useEffect(() => {
        fetch(`https://power-hack-superb.herokuapp.com/api/billing-list?existPage=${existPage}&pageSize=${pageSize}`)
            .then(req => req.json())
            .then(data => {
                setBills(data);
                setSearchResult(data)
            });
    }, [existPage, pageSize, bills]);


    // এই

    const [searchResult, setSearchResult] = useState(bills);

    const handleSearch = event => {
        const searchText = event.target.value;
        const result = bills.filter(bill => ((bill.name.toLowerCase()).includes(searchText.toLowerCase()) || (bill.email.toLowerCase()).includes(searchText.toLowerCase()) || (bill.phone.toLowerCase()).includes(searchText.toLowerCase())));
        setSearchResult(result);
    }



    /* useEffect(() => {

        fetch(`https://power-hack-superb.herokuapp.com/api/billing-list`)

            .then(res => {

                if (res.status === 401 || res.status === 403) {

                    // signOut(auth);
                    // localStorage.removeItem('accessToken');
                    // navigate('/');
                }

                return res.json();
            })

            .then(data => {
                setSearchResult(data)
            });

    }, []); */


    useEffect(() => {
        fetch('https://power-hack-superb.herokuapp.com/billCount')
            .then(res => res.json())
            .then(data => {
                const totalProduct = data.count;
                const totalPage = Math.ceil(totalProduct / 10);
                setPageCount(totalPage);
            })
    }, [])


    return (

        <div>
            <div className='flex justify-between items-center p-2 w-11/12 mx-auto mt-12 mb-6 bg-secondary'>
                <div className='flex items-center'>
                    <h3 className='px-8 text-xl text-white font-bold'>Billings</h3>
                    <div className="form-control">
                        <div className="input-group h-4/5">
                            <input type="text" onChange={handleSearch} placeholder="Search…" className="input input-bordered" />
                            <button className="btn bg-black btn-small text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="add-bill" className="btn btn-wide bg-black text-white font-bold" onClick={handleShow}>Add New Bill</label>
                </div>
            </div>
            {
                addBill && <AddBill
                    addBill={addBill}
                    setAddBill={setAddBill}
                ></AddBill>
            }

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
                                searchResult.map((bill, index) => <tr key={index}>
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
                        {/* create pagination button */}
                        <div>
                            {
                                [...Array(pageCount).keys()].map(number =>
                                    <button
                                        className={`m-2 ${existPage === number ? 'btn btn-primary' : 'btn'}`} onClick={() => setExistPage(number)}>

                                        {number + 1}
                                    </button>)
                            }

                            <select onChange={event => setPageSize(event.target.value)} className='bg-primary w-10 h-10 text-white'>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
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
        </div>
    );
};

export default HomeHeader;