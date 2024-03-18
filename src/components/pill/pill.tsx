import React from "react";
import { PillProps } from "./props";
import "./styles.scss";

const Pill = ( { value }: PillProps ) => {
    return (
        <>
            <div className="pill">
                { value }
            </div>
        </>
    )
};

export default Pill;