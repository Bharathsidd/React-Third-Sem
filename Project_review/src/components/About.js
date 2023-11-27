import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
function Abt() {
  return (
    <div> 
      <nav className="navbar"> 
            <ul className="uli">
             <li className="head">VMart</li>   
             <Link to='/Regi'><li className="po"><a className="al" href="news.asp">Register</a></li></Link>
            <Link to='/Form'><li className="po"><a className="al" >Login</a></li></Link> 
             <Link to='/About'><li className="po"><a className="al" href="about.asp">About</a></li></Link>
             
             <Link to='/Home'><li className="po"><a className="al" href="#">Home</a></li></Link>
            </ul>
          </nav>
      <div className="aboutus">
        <div className='pic'>
        <h1 className='abd'>About Us</h1>
        <p className='vil'>As enablers of change, what we hope to achieve is access to good and fresh produce for everyone. We believe in fair prices and hold our farmers on pedestals - as they should be.</p>
        </div>
      </div>
      <div className="customer">
             <div className="feed">
                <div className="side1"><h1>Our Story</h1>
                <p>Welcome to the ’70s. India is seeing a boom in technology. We’re paving the path for the future. Bell bottom jeans are the in thing, and the disco revolution has taken us by storm. But there’s one group of people who aren’t grooving to the beat. The farmers don’t yet have the knowledge, or equipment to farm anything other than paddy and wheat. But the soil is fresh, and the market is ripe.<br></br>

Enter Shri Annamalai Agro Products Pvt Ltd Products - the parent company of Madras Mandi that started by supplying farm equipment, credit, and seeds to plant vegetables in the belief that this could give the farmers confidence in them and hopefully turn into a profit. The small population of Madras then was enough to keep the wheels of supply and demand churning. And slowly, the business grew. Today, we have over 1000+ farmers that are part of this growing family that helps us supply to bigger partners and companies like Nissan.<br></br>

Madras Mandi was born in 2020 with one goal – to connect our farmers to our customers, to you! With the wealth of knowledge gained from our farmers and partners, we built this platform in the hope to keep fair trade alive and support the backbone of our country, our farmers!</p>
                </div>
                <div className="side3"></div>
             </div>
          </div>
          <div className="customer1">
             <div className="feed1">
                <div className="side8">

                </div>
                <div className="side9">
                  <h1>We love food. And here’s why...</h1>
                  <p>We all know that there are certains dishes who’s name itself brings about a cheer in our taste buds. But what makes these dishes great? Of course it’s the way it’s cooked, but it’s also about the quality of ingredients used in making them. That’s why we strive to bring you the freshest and best fruits and vegetables plucked just 12 hours before it reaches your home.</p>
                  <br></br>
                  <br></br><h1>Our farmer first approach...</h1>
                  <p>Our farmers are our pride, a part of our family. These farmers have been with us for over 60 years and we, at Madras Mandi ensure that all our farmers are paid fairly and on time.</p>
                </div>
             </div>
          </div>
          <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='fc'>
                            <h4>Company</h4>
                             <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our services</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Others</a></li>
                             </ul>
                        </div>
                        <div className='fc'>
                            <h4>Get help</h4>
                             <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Order status</a></li>
                                <li><a href="#">Payment options</a></li>
                             </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='fc'>
                            <h1 className='mart'>VMart</h1>
                            <div className='log'> 
                                 <div className='logo'><a href='#'><img src={require('./icons8-facebook-50.png')} id='face'></img></a></div>
                                 <div className='logo'> <a href='#'><img src={require('./icons8-google-30.png')} id='goo'></img></a></div>
                                 <div className='logo'><a href='#'><img src={require('./icons8-instagram-50.png')} id='ins'></img></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Abt;
