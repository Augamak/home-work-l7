import { useContext, useState } from "react";
import { StoreContext } from "../../App";

export const PhonesComponent = (props) => {
    return (
        <div>
            <img src={props.iphone.image} alt="iphone" />
            <p>{props.iphone.model}</p>
            <p>{props.iphone.price} Eur</p>
        </div>    
    )
}