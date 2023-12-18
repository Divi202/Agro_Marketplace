"use client";
// css file
import "@/style/signup.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SignUp() {
  // state to take input from the form
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleUsertype = (e) => {
    setUserType(e.target.value);
  };
  // Router used to navigate to another page after signup
  const router = useRouter();
  // Connect to Database through API
  // function to handle register btn
  const handleRegister = async () => {
    // first check whether the password and the confirm password is same or not
    console.warn(fname, lname, email, phoneno, pass, cpass, userType, gender);
    let result = await fetch("http://localhost:5000/user", {
      method: "POST",
      body: JSON.stringify({
        fname,
        lname,
        email,
        phoneno,
        pass,
        cpass,
        userType,
        gender,
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
      <div className="row container-fluid">
        <div className="col-4"></div>
        <div className="col-4">
          <h1 className="m-3 p-2 register">Register</h1>
          <form>
            {/* choose vendor/user */}
            <label>You are :</label>
            <input
              type="radio"
              className="btn-check mx-2"
              name="options"
              id="option1"
              autoComplete="off"
              value="vendor"
              onChange={handleUsertype}
            />
            <label className="btn btn-dark mx-2" htmlFor="option1">
              Vendor
            </label>

            <input
              type="radio"
              className="btn-check mx-2"
              name="options"
              id="option2"
              autoComplete="off"
              value="user"
              onChange={handleUsertype}
            />
            <label className="btn btn-dark mx-2" htmlFor="option2" disabled>
              User
            </label>
            {/* First name  */}
            <input
              className="form-control my-3 p-2"
              type="text"
              placeholder="Enter your first name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              required
            ></input>
            {/* Last name  */}
            <input
              className="form-control my-3 p-2"
              type="text"
              placeholder="Enter your last name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
              required
            ></input>

            {/* gender */}
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Gender:
            </label>
            <div className="selectGender">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="male"
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="female"
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            {/* Email  */}
            <input
              className="form-control my-3 p-2"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
            {/* Phone no   */}
            <input
              className="form-control my-3 p-2"
              type="tel"
              placeholder="Enter your phoneno"
              value={phoneno}
              onChange={(e) => {
                setPhoneno(e.target.value);
              }}
              required
            ></input>
            {/* Password  */}
            <input
              className="form-control mt-3 p-2"
              type="password"
              placeholder="Enter password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
            ></input>
            <div id="passwordHelpBlock" className="form-text mx-3">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
            {/* Confirm password  */}
            <input
              className="form-control my-3 p-2"
              type="password"
              placeholder="Confirm Password"
              value={cpass}
              onChange={(e) => {
                setCpass(e.target.value);
              }}
              required
            ></input>
            {/* Agree to terms and conditions  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Plese check to agree to terms and conditions of Agro
                Marketplace.
              </label>
            </div>
            {/* Register btn  */}
            <button
              type="button"
              className="form-control my-3 p-2 btn btn-dark"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>

          <div className="noacc">
            <p id="noacc1">Already have an account?</p>
            <Link href="/login" id="noacc2">
              &nbsp; Login
            </Link>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}
