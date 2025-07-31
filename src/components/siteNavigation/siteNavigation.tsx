import React, { useRef, useCallback } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const SiteNavigation = ({ ref }: { ref?: React.Ref<HTMLLIElement>}) => {
    const linksRef = useRef<HTMLLIElement | null>(null);
    const setLinksRef = useCallback((node: HTMLLIElement) => {
        linksRef.current = node;
    }, [])
    return (
        <>
            <nav className='siteNavigation'>
                <div id='menu'>
                    <ul>
                        { siteLinks.map( (siteLink, index) => 
                            <li 
                                ref={(node) => {
                                    if (node) {
                                        setLinksRef(node);
                                        if (typeof ref === 'function') {
                                            ref(node);
                                        } 
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