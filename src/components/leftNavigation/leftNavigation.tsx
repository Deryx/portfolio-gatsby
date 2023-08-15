import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const LeftNavigation = () => {
    return (
        <>
            <nav>
                <ul>
                    { siteLinks.map( (siteLink) => 
                        <li>
                            <AnchorLink to={ siteLink.href }>
                                { siteLink.siteLink }
                            </AnchorLink>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default LeftNavigation;