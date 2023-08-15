import React from 'react';
import { Link } from 'gatsby';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const TopNavigation = () => {
    return (
        <>
            <nav>
                <ul>
                    { siteLinks.map( ( siteLink ) => 
                       <Link to={ siteLink.href }>
                            { siteLink.siteLink }
                       </Link>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default TopNavigation;