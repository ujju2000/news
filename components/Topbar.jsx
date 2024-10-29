"use client";
import React, { useState , useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";
import { useProvider } from "@/app/Provider";


export default function Topbar() {
  const {theme , setTheme } = useProvider();
  const [keyword , setKeyword] = useState("");

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {

    setTimeout(() => {  
      fetchNews();
    } , 2000)
    const fetchNews = async () => {
      const response = await fetch(``)
      const res = await response.json();
      console.log(res);
      console.log(keyword);
    }
  } ,[keyword])
  return (
    <div className="flex border border-2 rounded-lg p-4 justify-between items-center ">
      <h1 className="text-xl md:text-2xl font-bold uppercase ">NEWSLETTER </h1>
      <div className=" w-1/2 ">
        <Input type="text" placeholder="Search... " onChange = {(e) => setKeyword(e.target.value)} />
      </div>
      <button onClick={handleClick} className="transition-colors duration-300 ">
        {theme ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
