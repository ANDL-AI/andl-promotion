'use client'

import React, { useEffect, useRef } from 'react'

export default function PolkaDotGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const drawPolkaDots = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#AF95E2')
      gradient.addColorStop(1, '#6321E6')
      ctx.fillStyle = gradient

      const dotSize = 0.5 // Reduced dot size
      const spacing = 20 // Reduced spacing for more dots
      const offset = timestamp / 10000 // Further slowed down the animation

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          )
          const waveOffset = Math.sin(distanceFromCenter / 300 + offset) * 2 // Reduced wave amplitude and increased wavelength

          ctx.globalAlpha = 0.1 + Math.sin(distanceFromCenter / 300 + offset) * 0.05 // Adjusted opacity range
          ctx.beginPath()
          ctx.arc(x + waveOffset, y + waveOffset, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(drawPolkaDots)
    }

    drawPolkaDots(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
}