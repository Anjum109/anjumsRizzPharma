import React from 'react'
import Layout from '../Layout/Layout'
import Banner from './Banner'
import SearchBox from './SearchBox'
import Category from './Category/Category'
import Product from './Product/Product'
import InfoBar from './InfoBar/InfoBar'

export default function Home() {
    return (
        <div >

            <Layout>
                <div className='px-[135px] py-[30px]'>
                    <Banner />
                    <SearchBox />
                    <Category />
                </div>

                <InfoBar />
                <div className='px-[135px] py-[30px]'>
                    <Product />
                </div>

            </Layout>
        </div>
    )
}
