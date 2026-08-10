import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";

const Register = () => {

  const {creatUser} = useContext(AuthContext)
  const handleRegister =e=>{
    e.preventDefault()
    const email = e.target.email.value
   const password = e.target.password.value
   console.log(email,password)
   creatUser(email,password)
    .then((result)=>{
       console.log(result)
    })
    .catch(error=>{
        console.log(error.message)
    })
   
  }
    return (
      <div className="min-h-screen flex justify-center">
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Register now!</h1>
      
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                  <div className="card-body">
                    
                      <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                        <label className="label">Email</label>
                      <input name="email" type="email" className="input" placeholder="Email" />
                      <label className="label">Password</label>
                      <input name="password" type="password" className="input" placeholder="Password" />
                      <div><a className="link link-hover">Forgot password?</a></div>
                      <button className="btn btn-neutral mt-4">Register</button>
                     <p>Already Have an account</p>
                    </fieldset>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Register;