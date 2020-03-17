import React from 'react'
import AppleIcon from './Company'
import SearchIcon from './Search'
import './Template.css'
import ShoppingBag from './ShoppingBag'

const Header = (props) => {
    return (
        <div className="header">
            <a onClick={() => props.setView(props.views.HOME)}>
                <AppleIcon />
            </a>
            <a onClick={() => props.setView(props.views.MAC)}>
                <p>Mac</p>
            </a>
            <a onClick={() => props.setView(props.views.IPAD)}>
                <p>IPad</p>
            </a>
            <a onClick={() => props.setView(props.views.IPHONE)}>
                <p>IPhone</p>
            </a>
            <a onClick={() => props.setView(props.views.WATCH)}>
                <p>Watch</p>
            </a>
            <a onClick={() => props.setView(props.views.TV)}>
                <p>TV</p>
            </a>
            <a onClick={() => props.setView(props.views.MUSIC)}>
                <p>Music</p>
            </a>
            <a onClick={() => props.setView(props.views.SUPPORT)}>
                <p>Support</p>
            </a>
            <a onClick={() => props.setView(props.views.HOME)}>
                <SearchIcon />
            </a>
            <a onClick={() => props.setView(props.views.HOME)}>
                <ShoppingBag />
            </a>
        </div>
    )
}

export default Header