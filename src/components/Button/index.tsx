import React from "react";
import "./style.scss"
import { ButtonProps } from "../../types";

const Button:React.FC<ButtonProps> = ({children,onClick, className,...props})=>{
    return<button onClick={onClick} className={"button "+className} {...props}>
        {
            children
        }
    </button>
}

export default Button;