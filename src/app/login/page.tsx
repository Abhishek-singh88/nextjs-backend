'use client';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function loginPage(){

    const router = useRouter();
    const[user,setuser] = useState({
        email:"",
        password:""
    })

    const[buttonDisabled,setButtonDisabled] = useState(false);
    const[loading,setloading] = useState(false);

    const onLogin = async () =>{

        try{

            setloading(true);
            const response = await axios.post('api/users/login',user);
            console.log("login success",response.data);
            router.push('/profile');

        }catch(error:any){
            console.log("login failed");
            toast.error(error.message);
        }

    }
    
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }

    },[user])

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr/>
                <label htmlFor ="email">Email</label>
            <input className ="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white" 
                type="text" id="email" onChange = {(e) => setuser({...user,email: e.target.value})} placeholder = "email" />

                <label htmlFor ="password">Password</label>
            <input className ="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white" 
                type="text" id="password" onChange = {(e) => setuser({...user,password: e.target.value})} placeholder = "password" />

                <button onClick = {onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400">
                    {buttonDisabled ? "Fill details to login":"Login"}
                </button>
                <Link className ="text-white" href="/signup">visit signup page</Link>
        </div>
    )
}

export default loginPage; 