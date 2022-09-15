import React from 'react'
import Card from '../../components/card/Card'
import Navbar from './components/Navbar'
import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar>
                <div className='search__container'>
                    <input id='search' type='text'
                        placeholder='recherche' 
                        className='navbar__search' />
                    <i className='fa fa-search search__icon' />
                </div>
            </Navbar>
            <div className='home__creation'>
                <div className='creation__title'>
                    Référence formulaire
                </div>
                <div className='content__container'>
                    <span id='new__form'>
                        <i className='fa fa-plus ' />
                    </span>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Home
