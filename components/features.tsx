"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { HandHelping, MessageSquare, BarChartIcon as ChartNetwork } from "lucide-react"

// Constants for consistent sizing
const CARD_WIDTH = 320
const STACK_OFFSET = 12
const MIN_WIDTH_FOR_SPREAD = CARD_WIDTH * 3 + 100 // Minimum width needed to spread cards

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  isSelected?: boolean
  isStacked?: boolean
  onClick?: () => void
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
  isSelected = false,
  isStacked = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: CARD_WIDTH }}
      className={`bg-white text-black p-6 rounded-lg select-none transition-all duration-300 cursor-pointer
        ${isSelected ? "scale-110 shadow-xl z-50" : ""}
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
  const [canSpread, setCanSpread] = useState(windowWidth >= MIN_WIDTH_FOR_SPREAD)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setCanSpread(width >= MIN_WIDTH_FOR_SPREAD)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto cycle the cards every 5 seconds when not hovered
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCards((prevCards) => {
          const [first, ...rest] = prevCards
          return [...rest, first]
        })
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  const stackStyles = (index: number) => {
    if (isHovered && canSpread) {
      // When hovered and enough space, spread cards
      const centerIndex = Math.floor(cards.length / 2)
      const maxSpread = Math.min(340, windowWidth * 0.25)
      const spread = (index - centerIndex) * maxSpread
      return {
        transform: `translateX(calc(-50% + ${spread}px)) rotate(0deg)`,
        zIndex: selectedCard === index ? 50 : cards.length - index,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      } as React.CSSProperties
    }

    // Default stacked layout or mobile view
    const offset = index * STACK_OFFSET
    const rotate = index % 2 === 0 ? 3 : -3
    const isTop = selectedCard === index || (!canSpread && index === cards.length - 1)

    return {
      transform: `translateX(-50%) translateY(${offset}px) rotate(${rotate}deg)`,
      zIndex: isTop ? 50 : cards.length - index,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    } as React.CSSProperties
  }

  const handleCardClick = () => {
    if (!canSpread) {
      // On mobile, clicking cycles through cards
      setCards((prevCards) => {
        const [first, ...rest] = prevCards
        return [...rest, first]
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-80 h-[400px] transition-all duration-500"
        style={{
          width: isHovered && canSpread ? "90vw" : `${CARD_WIDTH}px`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            style={stackStyles(index)}
            className="absolute top-0 left-1/2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false)
              setSelectedCard(null)
            }}
          >
            <FeatureCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              isSelected={selectedCard === index}
              isStacked={!isHovered || !canSpread}
              onClick={handleCardClick}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCardsCarousel
