import React from 'react'
import Layout from '../Layout/Layout'
import Banner from './Banner'
import SearchBox from './SearchBox'
import Category from './Category/Category'
import Product from './Product/Product'
import InfoBar from './InfoBar/InfoBar'
import VirtualPortion from './VirtualPortion/VirtualPortion'
import Reviews from '../Reviews/Reviews'

export default function Home() {
    return (
        <div className=''>

            <Layout>
                <div className='px-5 lg:px-[135px] py-[30px]'>
                    <Banner />
                    <SearchBox />
                    <Category />
                </div>

                <InfoBar />
                <div className='px-5 lg:px-[135px] py-[30px]'>
                    <Product />
                </div>
                <VirtualPortion />
                <Reviews />
            </Layout>
        </div>
    )
}