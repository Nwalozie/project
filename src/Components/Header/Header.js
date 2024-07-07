import React from "react";
import "./Header.css"
import  image from "../../Assets/Financial-freedom.jpg" 

export const Header = () => {
  return (
    <div className="header section__padding" id="home">
        <div className= "header-content">
            <h1 className="gradient__text">
            "Unlock Financial Freedom with BudgetSmith &#9472; Every Expense Shapes Your Wealth." 
            </h1>
        

            <div className="header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="header-content__people">
                {/* <img src={people} /> */}
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="header-image">
            <img src={image} alt="financial freedom"></img>
        </div>
        
    </div>
  )
}
