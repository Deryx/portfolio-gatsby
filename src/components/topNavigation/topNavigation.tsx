import React, { useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { siteLinks } from '../../siteLinks';
import './styles.scss';

const TopNavigation = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const closebuttonRef = useRef(null);

    const showMenu = () => {
        if (menuRef.current?.classList.contains( 'slide-out' ) ) {
            menuRef.current?.classList.remove( 'slide-out' );
        }
        menuRef.current?.classList.add( 'slide-in' );
    }

    const hideMenu = () => {
        if (menuRef.current?.classList.contains( 'slide-in' ) ) {
            menuRef.current?.classList.remove( 'slide-in' );
        }
        menuRef.current?.classList.add( 'slide-out' );
}

    return (
        <>
            <nav className='topNavigation'>
                <div id='hamburger-menu' onClick={ showMenu }>
                    <div className='hamburger-bar'></div>
                    <div className='hamburger-bar'></div>
                    <div className='hamburger-bar'></div>
                </div>
                <div id='menu' ref={ menuRef }>
                    <div ref={ closebuttonRef } className='close-button' onClick={ hideMenu }>
                        <button>x</button>
                    </div>
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

export default TopNavigation;