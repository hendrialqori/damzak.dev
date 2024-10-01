import React from "react";
import Hero from "#/modules/home/hero";
import Profile from "#/modules/home/profile";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Profile />
    </main>
  )
}