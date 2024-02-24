import React from "react";
import { PillProps } from "./props";

const Pill = ( { backgroundColor, value }: PillProps ) => {
    return (
        <>
            <div style={{backgroundColor: `#${backgroundColor}`}}>
                { value }
            </div>
        </>
    )
};

export default Pill;