import React from 'react'

function Card(props) {
    return (
        <>
          
               <div className="">
                    <img src={props.image} className="img-fluid"/>
                    <h5>{props.title}</h5>
               </div>
                              
        </>
    )
}

export default Card
