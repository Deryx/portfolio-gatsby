import React, { useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const SiteNavigation = ({ ref }: { ref?: React.Ref<HTMLLIElement>}) => {
    const linksRef = useRef<HTMLLIElement | null>([]);
    return (
        <>
            <nav className='siteNavigation'>
                <div id='menu'>
                    <ul>
                        { siteLinks.map( (siteLink, index) => 
                            <li 
                                ref={(node) => {
                                    linksRef.current = node;
                                    if (typeof ref === 'function') {
                                        ref(node);
                                    } else if (ref) {
                                        ref.current = node;
                                    }
                                }} 
                                key={ siteLink.siteLink }>
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