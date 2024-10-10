import React from "react";
import Hero from "#/modules/home/hero";
import Profile from "#/modules/home/profile";
import WorkExperiences from "#/modules/home/work-experiences";
import Projects from "#/modules/home/projects";
import Footer from "#/modules/home/footer";

export default function Home() {
  return (
    <main className="bg-black font-mulish">
      <Hero />
      <Profile />
      <WorkExperiences />
      <Projects />
      <Footer />
    </main>
  )
}