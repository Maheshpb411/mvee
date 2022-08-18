import React from "react";

const Heading = (props) =>{
        return (
            <div className="col" style={{padding:"20px 0px 0px 100px"}}>
                <h1>{props.heading}</h1>
            </div>
        )
}

export default Heading;