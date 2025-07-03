'use client'
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { GlobalChat } from "@/components/global-chat";
import TimeLeftThisYear from "@/components/time-left";
import Analytics from "@/components/analytics";
import SplashCursor from "@/components/SplashCoursor";

export default function Home() {

  useEffect(() => {
    handleConsent(true)
  }, []);

  const handleConsent = (decision: boolean) => {
    if (decision) fetch("/api/analytics/track");
  };

  return (
    <>
    <SplashCursor/>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col gap-2">
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-6 p-4">
          
          <div className="w-full flex justify-center">
            <GlobalChat />
          </div>
        </div>

        <div className="p-4">
          {<Analytics />}
          <TimeLeftThisYear />
        </div>
      </div>
    </>
  );
}
