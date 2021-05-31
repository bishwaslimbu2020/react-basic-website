import React from 'react'
import Card from "./Card"
import Sdata from "./Sdata"

function Service() {
    return (
        <div className="container nav_bg py-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-4">
                            {
                                Sdata.map((val)=>{
                                    return <Card
                                        image={val.image}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
