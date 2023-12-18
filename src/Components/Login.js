"use client";
import Link from "next/link";
import "@/style/login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Login() {
  // State for the input boxes email and passoword
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Router used to navigate to another page after signup
  const router = useRouter();

  // handle login button
  const handleLogin = async () => {
    console.log("button clicked ");
    console.log("Email:", email);
    console.log("Password:", pass);

    // send data to api and check in the database or connect with db
    console.warn(email, pass);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        pass,
      }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      router.push("/");
    }
  };

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
                type="email"
                className="login_boxes"
                placeholder=" &nbsp;Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="login_boxes"
                placeholder=" &nbsp;Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
            <div className="forgot_pass">Forgot Passoword?</div>
            <button className="Login_btn" onClick={handleLogin}>
              Log in
            </button>
            <div className="noacc">
              <p id="noacc1">Don't have an account?</p>
              <Link href="/signup" id="noacc2">
                &nbsp; Create an account
              </Link>
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
