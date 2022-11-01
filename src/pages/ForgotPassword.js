


function ForgotPassword() {
  return (
  <>
  <div class="header">
      <text>  'Hippo-Campus'</text>
  </div>

  <div class="subheader">
      <text>MSEUF's first beta web based and mobile application clinic management system</text>
  </div>

  <div class="card">
    <div className='text-card'>
      <text>Forgot Password?</text>
    </div>
    <div className='sub-card'>
      <text>Enter the Email Associated with your Account</text>
    </div>

    <form action="" method="post">
  <div className="box1">
      <div class="container1">
          <div class="material-textfield1">
              <input placeholder="Email" type="text"/>
          </div>
      </div>
      <br></br>
  </div>
  <button type="submit" class="btn3">Send</button>
  </form>

  <div className='bgimage'>
    <img src="/password.png"></img>
  </div>
</div>











    </>



  );
  }


export default ForgotPassword;