import React from 'react'

import WelcomePanel from './components/WelcomePanel'
import Features from './components/Features'
import Timeline from './components/Timeline'
import Banner from './components/Banner'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <>
            <WelcomePanel />
            <Features />
            <Timeline />
        </>
    )
}