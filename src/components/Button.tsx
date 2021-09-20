import React from "react";
import "./Button.scss"

type ButtonProps = {
    className?: string;
    onClick?:any;
}
const Button:React.FC<ButtonProps> = ({children,onClick, className,...props})=>{
    return<button onClick={onClick} className={"button "+className} {...props}>
        {
            children
        }
    </button>
}

export default Button;