import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ onGetPagination, totalPage }) => {
    const [acitvePagination, setActivePagination] = useState(1);
    let items = [];

    const handleChoosePagination = (number) => {
        setActivePagination(number)
        onGetPagination(number);
    }

    for (let i = 1; i <= totalPage; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={i === acitvePagination}
                onClick={() => handleChoosePagination(i)}
            >
                {i}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination size="lg">{items}</Pagination>
    )
}

export default PaginationComponent