import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Template = (props) => {
    return (
        <React.Fragment>
            <Header setView={props.setView} views={props.views} />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Template;