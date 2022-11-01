import './css/LoginSignup.css';
import {Link} from 'react-router-dom'
function LoginSignup() {
  return (
    <div className='full-header'>
      <Link to='/signup'>
        <button class="btn3" >SIGN UP</button>
      </Link>
        
        <br></br>
        <Link to='/login'>
          <button class="btn1" >LOGIN</button>
        </Link>
        

        <div class="image-background">
              <img src="/logbg.png" alt="bg" width={550} height={550}></img>
        </div> 
    </div>
  );
}


export default LoginSignup;
