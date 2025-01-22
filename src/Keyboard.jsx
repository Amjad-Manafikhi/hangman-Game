import React from "react";

export default function Keyboard(props) {
    const buttonColor = (() => {
        if (props.isHeld) {
            if (props.isWanted) {
                return "green"; // Color as a string
            } else {
                return "red";
            }
        } else {
            return "rgb(213,149,26)";
        }
    })();


    const handleClick = () => {
        console.log(props.match)
        if (props.match) props.hold(props.id)
    }

    const upperValue = props.value.toUpperCase();
    const style = {
        backgroundColor: buttonColor
    }
    return (
        <button style={style} onClick={() => handleClick()}>{upperValue}</button>

    )
}   