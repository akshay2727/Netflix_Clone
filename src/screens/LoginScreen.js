import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
 const [signIn, setSignIn] = useState(false);


  return (
    <div className="loginScreen">
        <div className="loginScreen_background">
            <img 
            className="loginScreen_logo"
            src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png" 
            alt=""
             />
             <button onClick={() => setSignIn(true)}
             className="loginScreen_button">
               Sign In
             </button>
             

             <div className="loginScreen_gradient" />
             </div>

             <div className="loginScreen_body">
               {signIn ? ( 
                <SignupScreen />
               ) : (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancle at any time.</h2>
                <h3>Ready to Watch? Enter your email to create or restart your membership.</h3>

                <div className="loginScreen_input">
                  <form>
                    <input type='email'
                    placeholder="Email address" />
                    <button 
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted">
                      GET STARTED
                    </button>
                  </form>
                </div>
              </>
              )}
             </div>
    </div>
  );
}

export default LoginScreen