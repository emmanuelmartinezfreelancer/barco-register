import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import { ReactComponent as LogoNuevo } from '../assets/logoBarcoNuevo.svg';

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
        if (error.code === "auth/internal-error"){
                
            setError("Correo inválido/Introduce un password");

        } else if(error.code === "auth/user-not-found" ) {

            setError("El usuario no existe")

        } else if(error.code === "auth/wrong-password") {
        
            setError("Contraseña incorrecta")
        } 
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex">
      
      {error && <Alert message={error} />}


      <div className="w-3/5 bg-[#40E0D0] p-5 h-screen bg-[url('/assets/backgroundHome.svg')]">

      <div className="flex place-content-center h-full">
          <LogoNuevo className="w-3/4" />
      </div>
      

      </div>
          

      <div className="bg-black w-2/5 grid h-screen place-items-center">
      
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded pt-6 pb-8 mb-4"
        >
        <h1 className="text-center font-helveticaL text-4xl tracking-widest" >BIENVENIDO</h1>
        <div className="pt-16 mb-8">
          <label
            htmlFor="email"
            className="block text-teal-400 text-sm font-bold mb-2 font-helveticaL"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="bg-transparent border border-[#40E0D0] rounded w-full py-2 px-3 text-teal-400 leading-tight focus:outline-none focus:shadow-outline"          
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block teal-400 text-sm font-bold mb-2 font-helveticaL"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="bg-transparent border border-[#40E0D0] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="hover:text-gray-500 font-bold rounded focus:outline-none focus:shadow-outline font-helveticaL text-xs"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm font-helveticaL text-xs"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>

      <hr className="bg-grey my-8 h-px bg-[#40E0D0] border-0 dark:bg-[#40E0D0"/>

      <p className="my-4 text-sm flex justify-between">
        Don't have an account?
        <Link to="/register" className="text-teal-400 hover:text-gray-500">
          Register
        </Link>
      </p>
      </form>
{/*       <button
        onClick={handleGoogleSignin}
        className="hover:bg-black hover:text-white text-black shadow rounded border-2 border-black py-2 px-4 w-full"
      >
        Google login
      </button> */}


    </div>

        </div>
    
  );
}
