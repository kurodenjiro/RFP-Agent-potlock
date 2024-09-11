"use client"
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    localStorage.setItem("indexHeader","null")
  },[])

  return (
    <div className="w-full h-full">
      <Header/>
      <div className="flex justify-center items-center">
        <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-20 mt-10 pb-20">
          <Hero/>
          <Container/>
        </div>
      </div>
      <div className="bg-[#0969DA] w-full h-72 md:h-64 flex flex-col gap-4 items-center p-6 text-white">
          <img width={120} src="/assets/avatar-group.png" alt="avatar" />
          <div className="flex flex-col items-center gap-4">
              <span className="font-semibold text-2xl">Still have questions?</span>
              <small className="text-center md:text-start">Can&#39;t find the answer you&#39;re looking for&#63; Join our Telegram Chat</small>
          </div>
          <Link href={"#"} className="flex cursor-pointer flex-row border border-gray-300 p-3 py-2 mt-5 gap-2 items-center rounded-full">
              <img width={20} src="/assets/icon/telegram.svg" alt="icon" />
              <span>Join Now</span>
          </Link>
      </div>
      <Footer/>
    </div>
  );
}
