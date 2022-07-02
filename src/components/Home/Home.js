import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from './HomeHeader';

const Home = () => {

    const token = localStorage.getItem('token');

    // use navigate hook
    const navigate = useNavigate();


    // after getting token redirect user to the previous page
    useEffect(() => {

        if (!token) {
            navigate('/login');
        }
    }, [token, navigate])


    const [addBill, setAddBill] = useState(false);

    const handleShow = () => setAddBill(true);

    return (
        <div>
            <HomeHeader
                addBill={addBill}
                setAddBill={setAddBill}
                handleShow={handleShow}
            ></HomeHeader>
        </div>
    );
};

export default Home;