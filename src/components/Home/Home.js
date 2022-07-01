import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import Table from './Table';

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
            <Table
                addBill={addBill}
                setAddBill={setAddBill}
                handleShow={handleShow}
            ></Table>
        </div>
    );
};

export default Home;