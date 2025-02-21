"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { HandHelping, MessageSquare, BarChartIcon as ChartNetwork } from "lucide-react"

// Constants for consistent sizing
const CARD_WIDTH = 320 // 80rem
const CARD_GAP = 340 // Spread gap
const STACK_OFFSET = 12 // Vertical offset for stacking

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  draggable?: boolean
  isSelected?: boolean
  isStacked?: boolean
  onClick?: () => void
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void
}

interface Card {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  draggable = false,
  isSelected = false,
  isStacked = false,
  onClick,
  onDragStart,
  onDragEnd,
}) => {
  return (
    <div
      draggable={draggable}
      onClick={onClick}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{ width: CARD_WIDTH }}
      className={`bg-white text-black p-6 rounded-lg select-none transition-all duration-300
        ${isSelected ? "scale-110 shadow-xl z-50" : "cursor-move"}
        ${isStacked ? "shadow-[0_4px_8px_rgba(0,0,0,0.1)]" : "shadow-lg hover:shadow-xl"}`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}

const initialCards: Card[] = [
  {
    id: 1,
    icon: <HandHelping className="w-10 h-8 text-[#8B5CF6]" />,
    title: "Personalized AI Tutoring, Just for You",
    description:
      "Get instant, customized feedback on your learning materials. ANDL's AI tutor adapts to your needs, helping you master concepts faster and with confidence.",
  },
  {
    id: 2,
    icon: <MessageSquare className="w-10 h-8 text-[#8B5CF6]" />,
    title: "Learn Your Way, Anytime, Anywhere",
    description:
      "Prefer videos, audio, or interactive exercises? ANDL lets you choose how you learn best, making studying more engaging and effective.",
  },
  {
    id: 3,
    icon: <ChartNetwork className="w-10 h-8 text-[#8B5CF6]" />,
    title: "AI That Explains, Not Just Answers",
    description:
      "Beyond just giving answers, ANDL's AI breaks down the reasoning, offers insights, and sparks deeper thinking—so you truly understand every concept.",
  },
]

const FeatureCardsCarousel: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(initialCards)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const timerDuration = 10000
  const intervalRef = useRef<number | null>(null)

  const stackStyles = (index: number) => {
    if (isHovered) {
      // When hovered, spread cards horizontally from center
      const centerIndex = Math.floor(cards.length / 2)
      const spread = (index - centerIndex) * CARD_GAP
      return {
        transform: `translateX(calc(-50% + ${spread}px)) rotate(0deg)`,
        zIndex: selectedCard === index ? 50 : cards.length - index,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      } as React.CSSProperties
    }

    // Default stacked layout with more pronounced stacking effect
    const offset = index * STACK_OFFSET
    const rotate = index % 2 === 0 ? 3 : -3 // Slightly larger rotation
    return {
      transform: `translateX(-50%) translateY(${offset}px) rotate(${rotate}deg)`,
      zIndex: selectedCard === index ? 50 : cards.length - index,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    } as React.CSSProperties
  }

  useEffect(() => {
    const startTime = Date.now()

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
    }

    // Only run timer when not hovered or selected
    if (!isHovered && selectedCard === null) {
      intervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - startTime
        if (elapsed >= timerDuration) {
          if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current)
          }
          setCards((prevCards) => {
            const [first, ...rest] = prevCards
            return [...rest, first]
          })
        }
      }, 50)
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, selectedCard])

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    if (!isHovered && selectedCard === null) {
      e.dataTransfer.setData("cardIndex", index.toString())
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const draggedIndex = e.dataTransfer.getData("cardIndex")
    if (draggedIndex !== "") {
      setCards((prevCards) => {
        const updatedCards = [...prevCards]
        const index = Number.parseInt(draggedIndex, 10)
        const [removed] = updatedCards.splice(index, 1)
        updatedCards.push(removed)
        return updatedCards
      })
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index)
  }

  return (
    <div className="flex flex-col items-center">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative w-80 h-[400px] transition-all duration-500"
        style={{
          width: isHovered ? `${CARD_GAP * 3}px` : `${CARD_WIDTH}px`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            style={stackStyles(index)}
            className="absolute top-0 left-1/2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FeatureCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              draggable={!isHovered && selectedCard === null}
              isSelected={selectedCard === index}
              isStacked={!isHovered}
              onClick={() => handleCardClick(index)}
              onDragStart={(e) => handleDragStart(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCardsCarousel

