
import React, { useState } from 'react';
import Banner from '../Components/Banner'
import Footer from '../Components/Footer';
import Collections from '../Components/Collections';
import Header from '../Components/Header';
import WomenCollectons from '../Components/WomenCollections'
import { Gents, Ladies } from '../data';



const  MainPage =() =>{
    
    const[ gentsFashion, setGentsFashion] = useState(Gents)
    const[ladiesFashion, setLadiesFashion] = useState(Ladies)

    return(
        <div className='MainPage'>
            <Header/>
            <Banner/>
            <Collections gentsFashion={gentsFashion}/>
            <WomenCollectons ladiesFashion={ladiesFashion}/>
            <Footer/>
        </div>
    )

}

export default MainPage;