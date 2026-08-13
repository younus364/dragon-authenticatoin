import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";


const Login = () => {
  const {loginUser} = useContext(AuthContext)
  const loction = useLocation()
  const navigate = useNavigate()
const [error,setError] = useState({})
console.log(loction)



  const handleLogin = e =>{
    e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   console.log(email)
   loginUser(email,password)
    .then(()=>{
        alert("User Succesfully Login")
        navigate(loction?.state ? loction.state : "/")
    })
    .catch(erro=>{
        console.log(error.message)
        setError({...error,login:erro.code})
    })
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                 <p>
                  {
                    error.login &&(
                      <label className="text-red-500">
                        {error.login}
                      </label>
                    )
                  }</p>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button  className="btn btn-neutral mt-4">Login</button>
                <p>Don't have a account?<Link to='/auth/register' className="font-bold">Register</Link> </p>
              </fieldset>
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;