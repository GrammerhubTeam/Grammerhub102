import React, { useState } from 'react'

const RowLogical = (props) => {
    // destructured
    const { item, number } = props
    // { item: {...}, number: 5 }

    // useState destructured from 'react' in line 1
    // first item in useState array: value
    // second item in useState array: function that changes value
    // item passed into useState function initial value
    const [overrideNumber, setOverride] = useState(0)
    const [inverted, setInverted] = useState(false)

    // we will talk about event handlers
    const onButtonClick = (event) => {
        setOverride(overrideNumber + 1)
        setInverted(!inverted)
    }

    // item object is from props
    return (
        <div className={`row row-logical ${inverted ? 'inverted' : ''}`}>
            {/* if overrideNumber doesnt equal 0 choose overrideNumber, else number from props (destructured) */}
            <h1>THIS IS MY NUMBER {overrideNumber !== 0 ? overrideNumber : number}</h1>
            <button 
                // onClick is a method on every component
                onClick={onButtonClick}
                style={{ padding: '2rem', backgroundColor: 'red', fontSize: '1.5rem', color: 'white' }}
            >
                PRESS ME TO CHANGE THIS
            </button>
            <div className="recap-feature column large-6 small-12 feature-retina-display">
            <figure className="recap-feature-icon image-overview-recap-retina-display" data-anim-lazy-image></figure>
            <h3 className="recap-feature-headline typography-overview-recap-subheadline">{item.title}</h3>
            <p className="recap-feature-copy large-10 small-12 typography-overview-recap-body">{item.description}</p>
            </div>
            <div className="recap-feature column large-6 small-12 feature-ipados">
            <figure className="recap-feature-icon image-overview-recap-ipados" data-anim-lazy-image></figure>
            <h3 className="recap-feature-headline typography-overview-recap-subheadline">{item.secondTitle}</h3>
            <p className="recap-feature-copy large-10 small-12 typography-overview-recap-body">{item.secondDescription}</p>
            </div>
        </div>
    )
}

export default RowLogical