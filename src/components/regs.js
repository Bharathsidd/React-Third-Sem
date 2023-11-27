import './reg.css';
import {Link} from 'react-router-dom';
function Regs()
{
    return(
       
                <div className="outbox1">
                    <nav className="navbar"> 
            <ul className="uli">
             <li className="head">VMart</li>   
             <Link to='/Regi'><li className="po"><a className="al" href="news.asp">Register</a></li></Link>
            <Link to='/Form'><li className="po"><a className="al" >Login</a></li></Link> 
             <Link to='/About'><li className="po"><a className="al" href="about.asp">About</a></li></Link>
             
             <Link to='/Home'><li className="po"><a className="al" href="home.asp">Home</a></li></Link>
            </ul>
          </nav>
                    <div className="boxin">
                <div className="boxb">
                    <div>
                        <form>
                            <h1 className='create'>Create an account</h1>
                            <input className="inpute" type="text" placeholder="Firstname"></input><br></br><br></br>
                            <input className="inpute" type="text" placeholder="Lastname"></input><br></br><br></br>
                            <input className="inpute" type="text" placeholder="Email"></input><br></br><br></br>
                            <input className="inpute" type="password" placeholder="Password"></input><br></br><br></br><br></br>
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