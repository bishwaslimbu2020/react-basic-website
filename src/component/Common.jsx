import React from "react";

const Common=(props)=>{
    return(
        <>
        <section id="header">
            <div className="container nav_bg py-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-6">
                                <h1>{props.name}</h1>
                            </div>
                            <div className="col-6">
                                <img src={props.imgsrc} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Common;