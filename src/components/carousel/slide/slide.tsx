import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { SlideProps } from "./props";
import Pill from "../../pill/pill";
import "./styles.scss";

const query = graphql`
    query {
        images: allImageSharp {
            edges {
                node {
                    fluid(maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

const Slide = ({ slideInfo }: SlideProps
) => {
    const { images } = useStaticQuery(query);
    const image = images.edges.filter((edge) => edge.node.fluid.src.includes( slideInfo.image ));

    return (
        <div className="slide">
            <section>
                <h2>{ slideInfo.projectName }</h2>
                <div className="images">
                    <Img fluid={ image[0].node.fluid } imgStyle={ {objectFit: 'contain'}}  alt="" />
                </div>
                <p>{ slideInfo.projectDescription }</p>
                <h4>
                    { slideInfo.company }
                </h4>
                    <div className='web-address'>
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