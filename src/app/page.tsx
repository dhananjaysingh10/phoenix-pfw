
'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import ProfileCard from "@/components/profile-card";
import { GlobalChat } from "@/components/global-chat";
import TimeLeftThisYear from "@/components/time-left";
import Analytics from "@/components/analytics";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SplashCursor from "@/components/SplashCoursor";

export default function Home() {
  const [showConsent, setShowConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("analyticsConsent");
    if (storedConsent === null) {
      setShowConsent(true);
    } else {
      setConsentGiven(storedConsent === "true");
    }
  }, []);

  const handleConsent = (decision: boolean) => {
    localStorage.setItem("analyticsConsent", decision.toString());
    setConsentGiven(decision);
    setShowConsent(false);
    if (decision) fetch("/api/analytics/track");
  };
  const handleSeeAnalytics = () => {
    setShowConsent(true);
  };

  return (
    <>
    <SplashCursor/> 
      <Navbar />
      <div className="w-full min-h-screen flex flex-col gap-2">
        <Dialog open={showConsent} onOpenChange={setShowConsent}>
          <DialogContent className="sm:max-w-md bg-background">
            <DialogHeader>
              <DialogTitle>Welcome!</DialogTitle>
              <DialogDescription>
                Do you want us to count you in?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-center gap-3">
              <Button
                variant="secondary"
                onClick={() => handleConsent(false)}
                className="px-6"
              >
                No Thanks
              </Button>
              <Button
                onClick={() => handleConsent(true)}
                className="px-6"
              >
                Count Me In
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-6 p-4">
          <div className="w-full md:w-2/5 flex justify-center">
            <ProfileCard />
          </div>
          <div className="w-full md:w-3/5 flex justify-center">
            <GlobalChat />
          </div>
        </div>

        <div className="p-4">
          {consentGiven === false && (
            <div className="flex justify-center mt-4">
              <Button
                onClick={handleSeeAnalytics}
                variant="outline"
                className="px-6 m-2"
              >
                See Analytics
              </Button>
            </div>
          )}
          {consentGiven && <Analytics />}
          <TimeLeftThisYear />
        </div>
      </div>
    </>
  );
}
