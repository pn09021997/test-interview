import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import ExpenseTableRow from "./ExpenseTableRow";
import styled from "styled-components";

import { QuotesClient } from '../../../axios/QuotesClient';
import PaginationComponent from "../../Pagination/Pagination";


//Styled Component
const TableStyled = styled(Table)`
    font-size: 1.5rem;
`;

const TableBox = styled.div`
    display: block;
    overflow-x: auto;
    white-space: nowrap;
`;


export default function ExpenseList(props) {
    const [expenses, setExpenses] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        /*const updateQuotes = async () => {
            const response = await QuotesClient.put(`/users/1`, {
                avatar: '',
                email: 'pn0921997@gmail.com',
                first_name: 'Phuong',
                last_name: 'Nguyen'
            });
            console.log(response);
        }

        updateQuotes();*/

        const getQuotes = async () => {
            const response = await QuotesClient.get(`/users?page=${page}`);
            setExpenses(response.data.data);
            setTotalPage(response.data.total_pages);
            console.log(response.data);
        }
        getQuotes();
    }, [page]);

    const DataTable = expenses.map((res, i) => {
        return <ExpenseTableRow obj={res} key={i} />;
    });

    const getPagination = (number) => {
        setPage(number)
    }

    return (
        <>
            <TableBox>
                <TableStyled striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>{DataTable}</tbody>
                </TableStyled>
            </TableBox>
            <PaginationComponent onGetPagination={getPagination} totalPage={totalPage}/>
        </>
    );
}
