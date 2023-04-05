

function Login () {
    return (
      <div className='container'>
          <div className="form-box">
            <div className="form-value">
                <form action="form">
                    <h2>Login</h2>
                    <div className="inputbox">
                        <label for="email">Email</label>
                        <input id="email" name="email" type="email"/>
                        
    
                    </div>
                    <div className="inputbox">
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password"/>  
                        
                        
                    </div>


                    <div className="forget">
                        <label for="forget"><input id="forget" type="checkbox"/>Remember Me<a href="">Forgot your password</a></label>
                            
    
                    </div>
                    <button>Login</button>
                    <div className="register">
                        <p>No account <a href="list3.html">Register</a></p>
    
                    </div>
                </form>

      </div>
    </div> 
    </div> 

    );
  };
  
  export default Login;