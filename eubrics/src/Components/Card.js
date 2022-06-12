import React from "react";


const Card = (props) => {

    return(
        <div className="Card" >
          <a href={props.page} >{props.name} </a>
        </div>
    
    )
}

export default Card