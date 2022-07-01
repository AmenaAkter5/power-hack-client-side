import { useEffect, useState } from "react";


const useBills = () => {

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
            });

    }, [bills]);

    return [bills, setBills];
};

export default useBills;