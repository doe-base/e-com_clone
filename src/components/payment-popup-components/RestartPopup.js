import React from "react";

export default function RestartPopup({ }){

    return (
        <section style={{width: '100%', height:"100%"}}>

                <div className="main">
                    <div className="img">
                        <img src='/img/warning.png' alt='warning' style={{width: '100%'}}/>
                    </div>
                    <h6 className="p1">Unexpected Error</h6>
                    <p className="p3">We are sorry, an unexpected error has occured from our end</p>
                </div>
          
        </section>
    )
}
