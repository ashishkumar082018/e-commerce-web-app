import React from 'react';
import NavBar from "./NavBar"
import Banner from "./Banner"
import { Outlet } from 'react-router-dom'; // To render the nested routes
import Footer from "./Footer"

const Layout = () => {
    return (
        <>
            <NavBar ></NavBar>
            <Banner />
            <main>
                <Outlet /> {/* Renders the content based on the route */}
            </main>
            <Footer />
        </>
    )
}
export default Layout
