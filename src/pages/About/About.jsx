import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Lexicon</h2>
            <p className='fs-17'>Lexicon is a smart and user-friendly app designed for book enthusiasts. Whether you're seeking the latest bestsellers, hidden gems, or specific titles, Lexicon makes discovering and tracking books effortless. Explore recommendations, read reviews, and locate your next favorite read with ease.
<br/>
<br/>
Using Lexicon, you can delve into personalized recommendations based on your reading preferences, browse insightful reviews from fellow readers, and seamlessly locate your next captivating read. The app's powerful search functionality enables you to quickly pinpoint books by title, author, genre, or keyword, ensuring you never miss out on a promising book. Whether you're a seasoned bookworm or just beginning your literary journey, Lexicon is your go-to companion for navigating the vast world of literature with ease and enjoyment.
<br/>
<br/>
Discover the joy of reading like never before with Lexicon. Let our app be your guide as you explore, discover, and immerse yourself in the captivating world of books, finding new favorites and uncovering hidden gems along the way. Start your reading adventure today with Lexicon!
            </p>
        
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
