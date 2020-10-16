import React from 'react'

function Incomelist() {
    return (
        <div className= "transaction transaction-income">
            <h2>Transaction History</h2>
            <ul className="transaction_list">
                <li className="transaction">
                    <span className="transaction-text">Salary</span>
                    <span className="transaction-amount"> ₹ 1000</span>
                    <button className="delete-btn">
                        <i className="trash"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Incomelist
