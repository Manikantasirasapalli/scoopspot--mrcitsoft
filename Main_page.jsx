import React from 'react'
import Head_cont from './Head_cont'
import Card_container from './Card_container'
import Commments from './Commments'
import Footer from './Footer'
import App from '../App.css'

const Main_page = () => {
  return (
    <div>
        <Head_cont />
        <Card_container />
        <Commments />
        <Footer />
    </div>
  )
}

export default Main_page