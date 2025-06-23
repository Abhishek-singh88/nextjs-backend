'use client';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function signupPage(){

    const router = useRouter();
    const[user,setuser] = useState({
        email:"",
        password:"",
        username:""
    })

    const[buttonDisabled,setButtonDisabled] = useState(false);
    const[loading,setloading] = useState(false);

    const onSignup = async () =>{

        try{

            setloading(true);
            const response = await axios.post('api/users/signup',user);
            console.log("signup success",response.data);
            router.push('/login');

        }catch(error:any){
            console.log("signup failed");
            toast.error(error.message);
        }

    }
    
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }

    },[user])

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1>{loading ? "Processing" : "Sign up"}</h1>
            <hr/>
            <label htmlFor ="username">username</label>
            <input className ="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white" 
                type="text" id="username" onChange = {(e) => setuser({...user,username: e.target.value})} placeholder = "username" />

                <label htmlFor ="email">Email</label>
            <input className ="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white" 
                type="text" id="email" onChange = {(e) => setuser({...user,email: e.target.value})} placeholder = "email" />

                <label htmlFor ="password">Password</label>
            <input className ="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white" 
                type="text" id="password" onChange = {(e) => setuser({...user,password: e.target.value})} placeholder = "password" />

                <button onClick = {onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400">
                    {buttonDisabled ? "Fill details to signup":"Sign up"}
                </button>
                <Link className ="text-white" href="/login">visit login page</Link>
        </div>
    )
}

export default signupPage; 