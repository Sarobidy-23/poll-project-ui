import React, { useState } from "react";
import './Login.css';
import { useDataProvider } from "../../context/ApiContext";

const Login = () => {
    const {client} = useDataProvider();
    const userInfo = {
        username:'',
        password:'',
        email: ''
    }

    const login = ()=>{
        client.post('/api/auth/signup',{
            username: userInfo.username,
            password: userInfo.password
        })
    }
    const signup = () =>{
        client.post('/api/auth/signin', userInfo)
    }
    
    return (
        <>
        <div class="main">  	
		<input type="checkbox" id="check" aria-hidden="true"/>
			<div class="signup">
				<form>
					<label htmlFor="check" aria-hidden="true">
                        Connexion
                    </label>
					<input type="text" name="txt"
                         placeholder="Nom d'utilisateur" 
                         onClick={(e)=>{userInfo.username = e.target.value}}/>
					<input type="password" name="pswd"
                         placeholder="Mot de passe" 
                         onClick={(e)=>{userInfo.password = e.target.value}}/>
					<button className="nav__singup" onClick={(e)=>{ e.preventDefault();login();}}>
                        Se connecter
                    </button>
				</form>
			</div>
			<div class="login">
				<form>
					<label htmlFor="check" aria-hidden="true">S'inscrire</label>
					<input type="text" name="txt" 
                        placeholder="Nom d'utilisateur" 
                        onClick={(e)=>{userInfo.username = e.target.value}}/>
					<input type="email" name="email" 
                        placeholder="Email" 
                        onClick={(e)=>{userInfo.email = e.target.value}}/>
					<input type="password" name="pswd" 
                        placeholder="Password" 
                        onClick={(e)=>{userInfo.password = e.target.value}}/>
					<button className="nav__login" onClick={(e)=>{e.preventDefault();signup()}}>
                        S'insrcrire
                    </button>
				</form>
			</div>
	    </div>
        </>
    )
}

export default Login;
