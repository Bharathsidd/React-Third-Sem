import './reg.css';
import {Link} from 'react-router-dom';
import {useState} from'react';
import axios from 'axios'
function Regs()
{
    const[userdetail,setUserdetail]=useState({
        email:'',
        password:''
  })
      function handleInput(event)
      {
        setUserdetail({...userdetail,[event.target.name]: event.target.value})
      }
      const[popup,setPopup]=useState(false);
      const[reg,setReg]=useState(true);
      
      const post=(event)=>{
            event.preventDefault()
        axios.post("http://localhost:3001/users",userdetail).
        then(res=> console.log(res)).
        catch(err=>console.log(err))
        setPopup(true);
        setReg(true);
        
      }
    return(
       
                <div className="outbox1">
                    <nav className="navbar"> 
            <ul className="uli">
             <li className="head">VMart</li>   
             <Link to='/Regi'><li className="po"><a className="al" href="news.asp">Register</a></li></Link>
            <Link to='/Form'><li className="po"><a className="al" >Login</a></li></Link> 
             <Link to='/About'><li className="po"><a className="al" href="about.asp">About</a></li></Link>
             
             <Link to='/Home'><li className="po"><a className="al" href="#">Home</a></li></Link>
            </ul>
          </nav>
                    <div className="boxin">
                <div className="boxb">
                    <div>
                        <form onSubmit={post}>
                            <h1 className='create'>Create an account</h1>
                            <input className="inpute" type="text" placeholder="Firstname"></input><br></br><br></br>
                            <input className="inpute" type="text" placeholder="Lastname"></input><br></br><br></br>
                            <input className="inpute" type="text" placeholder="Email" name='email' onChange={handleInput}></input><br></br><br></br>
                            <input className="inpute" type="password" placeholder="Password" name='password' onChange={handleInput}></input><br></br><br></br><br></br>
                            <button className="butm"><h3 className="regest">Register</h3></button>
                        </form>
                        <br></br>
                    </div>
                </div>
                <div className="boto">
                    </div>
                    </div>
                </div>
           
    )
}
export default Regs; 