import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams();
    console.log(_id);
    return (
        <div>
            purchase
        </div>
    );
};

export default Purchase;