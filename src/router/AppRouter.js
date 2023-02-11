import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import Admin from '../components/Admin/ProductManager/Admin';
import ExpenseList from '../components/Admin/ProductManager/ExpensesListing';
import CreateExpense from '../components/Admin/ProductManager/CreateExpense';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={
                localStorage.getItem('token') ? (
                    <Admin />
                ) : (
                    <Navigate replace to={"/"} />
                )
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
                path="/create-expense"
                element={CreateExpense}
            />
            <Route
                path="/edit-expense/:id"
                element={EditExpense}
            />
            <Route
                path="/expenses-listing"
                element={ExpenseList}
            />
        </Routes>
    )
}

export default AppRouter;

function EditExpense() {
    return (
        <div>EditExpense</div>
    );
}