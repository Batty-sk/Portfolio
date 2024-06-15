"use client"

import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Project from "../components/Project"
import Contact from "../components/Contact"
const page = () => {
  return (
    <main>
    <Header />
    <Hero />
    <About />
    <WorkExperience />
    <Project />
    <Contact />
    </main>
    )
}

export default page