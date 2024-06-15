"use client"

import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Project from "../components/Project"
const page = () => {
  return (
    <main>
    <Header />
    <Hero />
    <About />
    <WorkExperience />
    <Project />
    </main>
    )
}

export default page