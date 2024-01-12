"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Hero from './Hero'
function Main() {
  return (
    <Parallax  pages={2} style={{ top: '0', left: '0' }} >
        <Hero />
        </Parallax>
  )
}

export default Main