import React from "react";

export default function Footer(){
    return(
        <>
        <div id="fot">
            <h5 className="text-center p-3" style={{color:'white'}}>Resume Builder</h5>
            <div className="container " style={{color:'white'}}>
                <div className="row">
                    <div className="col">
                        <h6>About Us</h6>
                    </div>
                    <div className="col">
                        <h6>FAQs</h6>
                    </div>
                    <div className="col">
                        <h6>Contact Us</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>Aim</li>
                            <li>Vision</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Question</li>
                            <li>Question</li>
                            <li>Question</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">© 2021 Company, Inc</p>
                </div>
                
            </div>
        </div>
        </>
    )
}