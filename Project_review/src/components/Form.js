import './Form.css';
import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login(){
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


const fetch=async()=>{
  const response=await axios.get(`http://localhost:3001/users`);
  response.data.map((obj)=>{
    if(obj.email===username)
    {
     
      if(obj.password===password)
      {
        console.log('Succes')
        navigate('/Main')
      }
      else{
      
      }
    }
    else{
    }
  })
};
    
return(
    <div className="outbox">
        <nav className="navbar"> 
            <ul className="uli"> 
             <li className="head">VMart</li>   
             <Link to='/Regi'><li className="po"><a className="al" href="news.asp">Register</a></li></Link>
            <Link to='/Form'><li className="po"><a className="al" >Login</a></li></Link> 
             <Link to='/About'><li className="po"><a className="al" href="about.asp">About</a></li></Link>
             
             <Link to='/Home'><li className="po"><a className="al" href="#">Home</a></li></Link>
            </ul>
          </nav>
                <div className="box">
                   <h1 className='h123'>Login</h1>
                        <input className="use" type="text" placeholder="username"   onChange={(e) => setUsername(e.target.value)}
></input>
                        <br></br>
                        <input className="pas" type="password" placeholder="password"   onChange={(e) => setPassword(e.target.value)}
></input>
                       <br></br>
                       <a className='forg' href="#">Forgot password?</a>
                       <br></br>
                        <button className="buta" ><h3 className="ins" onClick={fetch}>
                            Login
                        </h3>
                        </button>
                        <h4 className='h44'>Or login using</h4>
                        <br></br>
                        <div className="bot">
                        <a href="https://www.facebook.com/"><img className='imo' src={require('./icons8-facebook-50.png')} id='fb' /></a>
                        <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"><img className='imo' src={require('./icons8-google-30.png')} id='tw' /></a>
                        <a href="https://www.instagram.com/"><img className='imo' src={require('./icons8-instagram-50.png')} id='in' /></a>
                        </div>
                </div>
                
            </div>
    );
}
export default Login;