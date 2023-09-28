"use client";

import { useState } from "react";

export default function SignUp() {
  // state to take input from the form
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [userType, setUserType] = useState("CUSTOMER");
  const [gender, setGender] = useState("");
  // function to handle register btn
  const handleRegister = () => {
    console.log("btn entered");
    console.log(fname, lname, email, pass, cpass, phoneno, gender, userType);
  };
  return (
    <>
      <div className="row container-fluid">
        <div className="col-4"></div>
        <div className="col-4">
          <h1 className="m-3 p-2">Register</h1>
          <form>
            {/* choose vendor/customer */}
            <label>You are :</label>
            <input
              type="radio"
              className="btn-check mx-2"
              name="options"
              id="option1"
              autocomplete="off"
              checked
            />
            <label className="btn btn-dark mx-2" for="option1">
              Vendor
            </label>

            <input
              type="radio"
              className="btn-check mx-2"
              name="options"
              id="option2"
              autocomplete="off"
            />
            <label className="btn btn-dark mx-2" for="option2" disabled>
              Customer
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
              <label className="form-check-label" for="flexCheckDefault">
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
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}
