import './Form.css';
import {Link} from 'react-router-dom';
function Login(){
    function Alt(){
        alert("Invalid username or Invalid password");
    }
return(
    <div className="outbox">
        <nav className="navbar"> 
            <ul className="uli"> 
             <li className="head">VMart</li>   
             <Link to='/Regi'><li className="po"><a className="al" href="news.asp">Register</a></li></Link>
            <Link to='/Form'><li className="po"><a className="al" >Login</a></li></Link> 
             <Link to='/About'><li className="po"><a className="al" href="about.asp">About</a></li></Link>
             
             <Link to='/Home'><li className="po"><a className="al" href="home.asp">Home</a></li></Link>
            </ul>
          </nav>
                <div className="box">
                   <h1 className='h123'>Login</h1>
                        <input className="use" type="text" placeholder="username"></input>
                        <br></br>
                        <input className="pas" type="password" placeholder="password"></input>
                       <br></br>
                       <a className='forg' href="#">Forgot password?</a>
                       <br></br>
                        <button className="buta" onClick={Alt}><h3 className="ins">
                            Login
                        </h3>
                        </button>
                        <h4 className='h44'>Or login using</h4>
                        <br></br>
                        <div className="bot">
                        <a href="https://www.facebook.com/"><img className='imo' src={require('./icons8-facebook-50.png')} id='fb' /></a>
                        <a href="https://twitter.com/?lang=en-in"><img className='imo' src={require('./icons8-google-30.png')} id='tw' /></a>
                        <a href="https://www.instagram.com/"><img className='imo' src={require('./icons8-instagram-50.png')} id='in' /></a>
                        </div>
                </div>
                
            </div>
    );
}
export default Login;