import React from 'react';
import './home.css'

const Home = () => {
  return (
    <section className='first'>
        
        <div className='head_title'>
             <h1>AleTube</h1>
             <div className='menu'>
                Home
             </div>
        </div>

        <div className='menu_list'>
                <li>HOME</li>
                <li>CONTACT</li>
                <li>YOUTUBE</li>
                <li>INSTAGRAM</li>
                <li>TIK-TOK</li>
             </div>

        <div className='icons'></div>
    </section>
    
  )
}

export default Home
