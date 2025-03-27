import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderSuccess.css";


const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="order-success-container">
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Thank you for shopping with us.</p>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
    );
};

export default OrderSuccess;
