import React from "react";
import { SlideProps } from "./props";
import { Link } from 'gatsby-link';
import Pill from "../../pill/pill";
import "./styles.scss";

const Slide = ({ slideInfo }: SlideProps
) => {
    return (
        <div className="slide">
            <section>
                <h2>{ slideInfo.projectName }</h2>
                <img src={ slideInfo.image } alt="" />
                <p>{ slideInfo.projectDescription }</p>
                <h4>
                    { slideInfo.company }
                </h4>
                    <div className='web-address'>
                        <span>address: </span> 
                        { slideInfo.webAddress ?
                            <a href={ slideInfo.webAddress } target='_blank'>
                                { slideInfo.webAddress }
                            </a> : 'N/A'
                        }
                    </div>
                <div className='tech-container'>
                    { slideInfo.technology?.map( 
                        ( tech ) => 
                            <Pill 
                                key={ `${ slideInfo.projectName }-${ tech }` } 
                                value={ tech } 
                            />
                    )}
                </div>
            </section>
        </div>
    )
}

export default Slide;