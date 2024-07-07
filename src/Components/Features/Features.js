import React from "react";
import "./Features.css"
import security_img from "../../Assets/security.jpg"
import dashboard_img from "../../Assets/dashboard1.jpg"
import insight_img from "../../Assets/insights.jpg"

export const Features = () => {
  return (
  <> <div className="features-heading" > <p id="features">Features</p> </div>
    
    <div class="features-container">
            <div>
                <div class="ft-image">
                    <img src={security_img} alt="Feature"></img>
                </div>
                <div class="ft-icon">
                    Fortress of Security
                </div>
                <div class="ft-content">
                    <p>We prioritize the security and privacy of your data, ensuring you have peace of mind.</p>
                </div>
            </div>

            <div>
                <div class="ft-image">
                    <img src={insight_img} alt="img"></img>
                </div>
                <div class="ft-icon">
                    Empower Your Financial Journey
                </div>
                <div class="ft-content">
                    <p>Gain insights into your spending habits to make informed decisions that align with your financial goals.</p>
                </div>
            </div>
            <div>
                <div class="ft-image">
                    <img src={insight_img} alt="img"></img>
                </div>
                <div class="ft-icon">
                    Budget Alerts and Notifications
                </div>
                <div class="ft-content">
                    <p>Sets up alerts to notify users about budget limits and significant transactions.</p>
                </div>
            </div>
            

            <div>
                <div class="ft-image">
                    <img src={dashboard_img} alt="Feature"></img>
                </div>
                <div class="ft-icon">
                Multi-Currency Support
                </div>
                <div class="ft-content">
                    <p>Integrate a currency converter to support users who deal with multiple currencies.</p>
                </div>
            </div>   

            <div>
                <div class="ft-image">
                    <img src={dashboard_img} alt="Feature"></img>
                </div>
                <div class="ft-icon">
                    Interactive Dashboards
                </div>
                <div class="ft-content">
                    <p>Create visually appealing dashboards with dynamic charts and graphs to showcase spending patterns. </p>
                </div>
            </div>  

            <div>
                <div class="ft-image">
                    <img src={dashboard_img} alt="Feature"></img>
                </div>
                <div class="ft-icon">
                    Interactive Dashboards
                </div>
                <div class="ft-content">
                    <p>Create visually appealing dashboards with dynamic charts and graphs to showcase spending patterns. </p>
                </div>
            </div>  
    </div>
    </>
  )
}

