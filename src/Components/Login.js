"use client";
import "@/style/login.css";
function Login() {
  return (
    <>
      <section>
        <div className="ltsec">
          <div className="ltsec_items">
            {" "}
            <h3 className="logo-name">AgroMarketplace</h3>
            <p className="loghead">Log in to your Account</p>
            <p className="welcome">Welcome back! Select method to log in: </p>
            <div className="refLogin">
              <button className="login_btn">
                {" "}
                {/* <i class="fa-brands fa-google"></i> */}
                <i class="bi bi-google"></i>
                Google
              </button>
              <button className="login_btn">
                {" "}
                <i class="fa-brands fa-facebook"></i>Facebook
              </button>
            </div>
            <div className="idlog">
              <hr />
              <p> &nbsp; or countinue with email &nbsp;</p>
              <hr />
            </div>
            <div className="input_box">
              <input
                type="text"
                className="login_boxes"
                placeholder=" &nbsp;Email"
              />
              <input
                type="text"
                className="login_boxes"
                placeholder=" &nbsp;Password"
              />
            </div>
            <div className="forgot_pass">Forgot Passoword?</div>
            <button className="Login_btn">Log in</button>
            <div className="noacc">
              <p id="noacc1">Don't have an account?</p>
              <p id="noacc2">&nbsp; Create an account</p>
            </div>
          </div>

          {/* <p className="slogan">Eat clean and green. </p>
          <p className="slogan">Eat organic!</p> */}
        </div>
        <div className="rtsec">section2</div>
      </section>
    </>
  );
}

export default Login;
