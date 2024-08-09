import React from 'react';
import './css/Home.css';
import Avatarlight from '../images/Rectangle.png';

function Home() {
  return (
    <div className="home-container">
      <section className='Mainbody'>
        <div className='leftSide'>
          <h1 className='hi'>HI!</h1>
          <h1 className='name'>I am soufiane <br /><span>Akdim</span></h1>
          <h4 className='description'>I'm A  Full-Stack Devloper  <br /></h4>
          I'm in my first year at EFET School, where I'm studying computer development. I'm enthusiastic about learning and have a strong passion for coding
        </div>
        <div className='rightSide'>
          <img src={Avatarlight} alt="Avatar" />
        </div>
      </section>
    </div>
  );
}

export default Home;
