import React from 'react'

/* constants */
import navData from '../../constants/navbar.json';

/* Components */
import ContentWrapper from '../shared/contentwrapper'
import Navbar from '../shared/navbar'

const Dashboard = () => (
    <div>
        <Navbar itemsMenu={navData} />
        <ContentWrapper />
    </div>
)

export default Dashboard