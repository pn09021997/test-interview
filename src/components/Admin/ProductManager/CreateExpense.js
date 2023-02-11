import React, { useState } from "react";
import ExpensesList from "./ExpensesListing";

export default function CreateExpense(props) {
    const [expense, setExpense] = useState({
        product_name: "",
        description: "",
        quantity: "",
        price: "",
        category_id: "1",
        product_image: "",
    });
    
    return (
        <div className="form-wrapper">
            <ExpensesList> </ExpensesList>
        </div>
    );
}
