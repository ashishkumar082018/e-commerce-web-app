import React from 'react';
import NavBar from "./NavBar"
import Banner from "./Banner"
import ProductList from './ProductList'
import Footer from "./Footer"

const Layout = () => {
    return (
        <>
            <NavBar ></NavBar>
            <Banner />
            <ProductList />
            <Footer />
        </>
    )
}
export default Layout
