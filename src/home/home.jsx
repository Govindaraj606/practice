import React from 'react'
import './home.css'
import logo from '../assets/logo.png'
import hero from '../assets/h1_hero1.jpeg'
import about from '../assets/about1.jpeg'
import one from '../assets/items1.jpeg'
import two from '../assets/items2.jpeg'
import three from '../assets/items3.jpeg'
import fore from '../assets/items1.jpeg'
import five from '../assets/items2.jpeg'


const Home = () => {

    return (
    <div className="full">
    <div className="top"> 
        <div className="icons" >
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div>
            <button className="call-btn">Call Us: +91 987-654-3210</button>
        </div>
    </div>
    <nav className="nav">
        <a href="#">HOME</a>
        <a href="cake">CAKES</a>
        <a href="about">ABOUT</a>
        <a href="blog">BLOG</a>
        <a href="contact">CONTACT</a>
    </nav>
    <div className="part1">
        <img src={hero} alt=""/>
        <div className="text1">
        <h1 className="f-style1"><span>Healthy Made </span> <span>Delicious Cake</span></h1>
        <button className="btn">ORDER NOW</button>
        </div>
    </div>
    <div className="part2">
        <h1 className="f-style2">This is Schilers. Awesome Food Theme. <br/>Purchase it and eat Burgers.</h1><hr/>
    </div>
    <div className="part3">
        <div className="about-text">
            <h2 className="f-style3" >This is Schilers. Awesome Food Theme. <br/>
                Purchase it and eat Burgers.</h2> <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p> <br/> 
            <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
        </div>
        <div className="about-img">
            <img src={about} alt="" />
        </div>
    </div>
    <div className="part4">
        <div>
            <img src={one} alt="" />
            <h2 className="f-style4">Cashmere Tank+Bag</h2>
            <p className="f-style4">&98.00</p>
        </div>
        <div>
            <img src={two} alt="" />
            <h2 className="f-style4">Delightfull Lemon</h2>
            <p className="f-style4">&98.00</p>
        </div>
        <div>
            <img src={three} alt="" />
            <h2 className="f-style4">Sweet Suprise</h2>
            <p className="f-style4">&98.00</p>
        </div>
        <div>
            <img src={fore} alt="" />
            <h2 className="f-style4">Cashmere Tank+Bag</h2>
            <p className="f-style4">&98.00</p>
        </div>
        <div>
            <img src={five} alt="" />
            <h2 className="f-style4">Delightfull Lemon</h2>
            <p className="f-style4">&98.00</p>
        </div>
    </div>
</div>  
  )
}

export default Home;