import './Home.css';
import {Link} from 'react-router-dom';
function Home()
{
    return(
        <div>
          <nav className="navbar"> 
            <ul className="uli">
             <li className="head">VMart</li>   
             <Link to='/Regi'><li className="po"><a className="al" href="news.asp">Register</a></li></Link>
            <Link to='/Form'><li className="po"><a className="al" >Login</a></li></Link> 
             <Link to='/About'><li className="po"><a className="al" href="about.asp">About</a></li></Link>
             
             <Link to='/Home'><li className="po"><a className="al" href="home.asp">Home</a></li></Link>
            </ul>
          </nav>
          <div className="first">
              <div className='photo'>
                <h1 className="text">A World of Goodness</h1>
                <h3 className="text">Shop exclusive on VMart</h3>
                <button className="butk">Buy now</button>
              </div>
          </div> 
          <div className="props">
            <h1 className="ex">Explore over a range of 200 fruits and vegetables</h1>
            <div className="flex">
                <div className="bb1"></div>
                <div className="bb2"></div>
                <div className="bb3"></div>
            </div>
          </div>
          <div className="customer">
             <div className="feed">
                <div className="side1"><h1>For your everyday fresh produce needs, it's a whole new experience.</h1>
                <p>The Indian consumer is not only price conscious, but is quality conscious too! At Madras Mandi, we strike the right balance between the two and bring to you wholesale fruits & wholesale vegetables that are handpicked from the best farms in India. Within 12 hours of picking, our produce reaches the store and we ensure that yesterday’s supplies are not served to our customers.</p>
                <p>Our business is our passion and that is why we leave no stone unturned when it comes to quality and customer service! We maintain high retail and supply chain standards to ensure our produce is delivered to our partners fresh and on time! Launched in 2020, Madras Mandi boasts of a portfolio of over 100 restaurants and counting.</p>
                <p>Our exclusive stores guarantee a wide variety of fresh produce, top quality at unbeatable prices! An experience to remember!</p></div>
                <div className="side2"></div>
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
    )
}
export default Home;