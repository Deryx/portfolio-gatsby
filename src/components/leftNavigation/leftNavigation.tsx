import React from 'react';
import { Link } from 'gatsby';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const LeftNavigation = () => {
    return (
        <>
            <nav>
                <ul>
                    { siteLinks.map( (siteLink) => 
                        <li>
                            <Link to={ siteLink.href }>
                                { siteLink.siteLink }
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default LeftNavigation;