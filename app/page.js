"use client";
import Loader from "@/components/Loader";
import NewsCard from "@/components/NewsCard";

import React, { useEffect, useState } from "react";

import "./globals.css";
import { useProvider } from "./Provider";
export default function page() {
  const {setData , data , loading , setLoading } =  useProvider();  
  
  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=${process.env.API_KEY}`
      );
      const res = await response.json();
      console.log(res);
      setData(res.articles);
    };
    fetchNews();
    setLoading(false);
  }, []);
  return (
    <div className="grid sm:grid-cols-3 ">
      {loading ? <Loader /> : data?.map((news) => (
        <NewsCard news={news} />
      ))}
      
    </div>
  );
}
