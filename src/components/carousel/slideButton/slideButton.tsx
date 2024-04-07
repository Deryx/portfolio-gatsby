import React from "react";
import { SlideButtonProps } from "./props";
import './styles.scss'

export const SlideButton = ({
    value,
    buttonFunction
}: SlideButtonProps) => {

    return (
        <button onClick={ buttonFunction }>
            { value }
        </button>
    )
}

export default SlideButton;