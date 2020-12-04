import React, { Fragment } from 'react'
import Search from '../components/Search';
import Users from '../components/Users';

function Home() {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home;
