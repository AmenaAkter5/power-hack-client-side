import React, { useState } from 'react';
import HomeHeader from './HomeHeader';

const Home = () => {

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