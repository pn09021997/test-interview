import React from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const ButtonStyle = styled(Button)`
    font-size: 1.5rem;
`;

const Avatar = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
`;

export default function ExpenseTableRow({ obj }) {
    return (
        <tr>
            <td>{ obj.id }</td>
            <td>
                <Avatar src={ obj.avatar} alt="avatar"/>
            </td>
            <td>{ obj.email }</td>
            <td>{ obj.first_name }</td>
            <td>{ obj.last_name }</td>
            <td>
                <ButtonStyle variant="primary">
                    Edit
                </ButtonStyle>
                <ButtonStyle
                    variant="danger"
                >
                    Delete
                </ButtonStyle>
            </td>
        </tr>
    );
}
