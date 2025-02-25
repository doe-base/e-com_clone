import React from "react";
import { TbMailCheck } from "react-icons/tb";


export default function CheckMailPopup({ }){
    
    return (
        <section style={{width: '100%', height:"100%"}}>

                <div className="main">
                    <div className="img2">
                        <img src='/img/mail.png' alt='warning' style={{width: '100%'}}/>
                    </div>
                    <h6 className="p1">Please check your email on how to proceed.</h6>
                    <p className="p3">This could take a minutes.</p>
                </div>
          
        </section>
    )
}
