"use client";
import React, { useState , useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";
import { useProvider } from "@/app/Provider";

import { AlignJustify , X} from 'lucide-react';

export default function Topbar() {
  const {theme , setTheme , setData ,data ,setLoading} = useProvider();
  const [keyword , setKeyword] = useState("");
  const [toggle , setToggle] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleClick = async (category) => {
    setLoading(true);
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${process.env.API_KEY}`)
    const res = await response.json();
    setData(res.articles);
    setLoading(false);
    setToggle(false);
  }

  useEffect(() => {

    setTimeout(() => {  
      fetchNews();
    } , 2000)
    const fetchNews = async () => {
      const response = await fetch(`https://gnews.io/api/v4/search?q=${keyword}&lang=en&country=in&max=10&apikey=${process.env.API_KEY}`)
      const res = await response.json();
      console.log(res);
      console.log(keyword);

      setData(res.articles);
    }
  } ,[keyword])
  return (
    <div className="flex border border-2 rounded-lg p-4 justify-between items-center ">
      <h1 className="text-xl md:text-2xl font-bold uppercase hidden sm:block">NEWSLETTER </h1>
      <div className=" w-1/2 ">
        <Input type="text" placeholder="Search... " onChange = {(e) => setKeyword(e.target.value)} />
      </div>
      <button onClick={handleTheme} className="transition-colors duration-300 ">
        {theme ? <Moon /> : <Sun />}
      </button>

      <div className={`sm:hidden  ${theme ? ' text-white bg-black ' : 'bg-white text-black '} cursor-pointer `} >
        {
          !toggle ?  <AlignJustify onClick = {() => setToggle(true)}/> : 
          <X onClick = {() => setToggle(false)} />
        }

        {toggle && <ul className = {`text-xl bg-black flex flex-col p-3 absolute top-20  rounded-md  border border-l-2 border-b-2 ${toggle ? 'translate-x-[-100px] transition duration-300 ease-in-out ' : 'translate-x-90' }`}> 
          <li className = 'border-b-2 border-white p-2 ' onClick ={handleClick}>Explore </li>
          <li className = 'border-b-2 border-white p-2 ' onClick ={handleClick}>Business</li>
          <li className = 'border-b-2 border-white p-2 ' onClick ={handleClick}>Sports</li>
          <li className  = 'border-b-2 border-white p-2' onClick ={handleClick}>Science</li>
          <li className = 'border-b-2 border-white p-2' onClick ={handleClick}>Technology</li>
        </ul>}
    </div>
    </div>
  );
}
