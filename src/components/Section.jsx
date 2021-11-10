import React from 'react'

export const SectionTitle = (props) => {
    return (
        <div className="section__title">
            {props.children}
        </div>
    )
}

export const SectionBody = (props) => {
    return (
        <div className="section__body">
            {props.children}
        </div>
    )
}

const Section = (props) => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export default Section
