import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBills from '../../hooks/useBills';
import logo from '../../images/logo.PNG';


const Header = () => {

    const [paid, setPaid] = useState(0);

    const [bills] = useBills();

    const amount = bills.map(bill => parseFloat(bill.amount));
    const sum = amount.reduce((a, b) => a + b, 0);

    useEffect(() => {

        setPaid(sum);

    }, [sum, setPaid])


    // menu items
    const menuItems = <>
        <li>Total Paid: {paid}</li>
    </>


    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow text-primary font-bold bg-base-100 text-xl rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-4xl text-white font-bold"><img className="h-10" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex mr-60">
                <ul className="menu menu-horizontal p-0 text-white font-bold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;