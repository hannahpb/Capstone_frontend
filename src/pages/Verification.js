

function Verification() {
  return (
  <>
    <div class="header">
        <text>'Hippo-Campus'</text>
    </div>

    <div class="subheader">
        <text>MSEUF's first beta web based and mobile application clinic management system</text>
    </div>

    <div class="card">
      <div className='text-card2'>
        <text>Verification</text>
      </div>
      <div className='sub-card2'>
        <text>Enter the Digit Code Sent to your Email</text>
      </div>

      <form action="" method="post">
    <div className="box2">
        <div class="container2">
            <div class="material-textfield2">
                <input type="text"/>
            </div>
        </div>
        <br></br>
    </div>
    <button type="submit" class="btn4">Verify</button>
    </form>

    <div className='verimage'>
      <img src="/verification.png"></img>
    </div>
  </div>
</>
  );
  }
export default Verification;