import React, { useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const SiteNavigation = () => {
    return (
        <>
            <nav className='siteNavigation'>
                <div id='menu'>
                    <ul>
                        { siteLinks.map( (siteLink) => 
                            <li key={ siteLink.siteLink }>
                                <AnchorLink to={ siteLink.href }>
                                    { siteLink.siteLink }
                                </AnchorLink>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SiteNavigation;