import React from 'react';
import "./Testimonial.css"
import image from "../../Assets/dashboard2.jpg"
export const Testimonial = () => {
  return (
    <div class="testimonial-container" id="testimonials">
        <div class="testimonial">
            <h1>What Our Users Say</h1>
            <div class="block">
                <div class="p-container">
             
                    <p class="img-p">
                        "BudgetSmith has completely transformed the way I manage my finances. The intuitive dashboard and real-time updates keep me on track, and the personalized insights have helped me save more each month."
                    </p>
                </div>

    
            <div class="block">
                <div class="p-container">

                    <p class="img-p">
                        <img scr={image}></img>
                    </p>
                </div>
            </div>
         
    
            <div class="block">
                <div class="p-container">
                
                    <p class="img-p">
                        "The budget alerts are fantastic. They help me stay within my budget and avoid overspending. Since using BudgetSmith, I've been able to save consistently for the first time."
                    </p>
                </div>
            </div>
           
    
            <div class="block">
                <div class="p-container">
                    
                    <p class="img-p">
                        "Setting and tracking savings goals with BudgetSmith has been incredibly motivating. The visual progress indicators make it easy to see my progress and stay committed to my financial goals."
                    </p>
                </div>
            </div>
          
    
            <div class="block">
                <div class="p-container">

                    <p class="img-p">
                        "The personalized recommendations based on my spending habits have been incredibly helpful. BudgetSmith not only helps me track my expenses but also provides actionable advice to improve my financial health."
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
