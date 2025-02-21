import React, { useState, useEffect, useRef } from 'react';
import { HandHelping, MessageSquare, ChartNetwork } from 'lucide-react';

/* ------------------------------------------------------------------
 * Types & Interfaces
 * -----------------------------------------------------------------*/
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
}

interface Card {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* ------------------------------------------------------------------
 * FeatureCard Component
 * -----------------------------------------------------------------*/
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  draggable = false,
  onDragStart,
  onDragEnd,
}) => {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className="w-full bg-white text-black p-4 rounded shadow-lg select-none cursor-move"
    >
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

/* ------------------------------------------------------------------
 * Initial Cards
 * -----------------------------------------------------------------*/
const initialCards: Card[] = [
  {
    id: 1,
    icon: <HandHelping className="w-10 h-8 text-[#8B5CF6]" />,
    title: 'Personalized AI Tutoring, Just for You',
    description:
      'Get instant, customized feedback on your learning materials. ANDL’s AI tutor adapts to your needs, helping you master concepts faster and with confidence.',
  },
  {
    id: 2,
    icon: <MessageSquare className="w-10 h-8 text-[#8B5CF6]" />,
    title: 'Learn Your Way, Anytime, Anywhere',
    description:
      'Prefer videos, audio, or interactive exercises? ANDL lets you choose how you learn best, making studying more engaging and effective.',
  },
  {
    id: 3,
    icon: <ChartNetwork className="w-10 h-8 text-[#8B5CF6]" />,
    title: 'AI That Explains, Not Just Answers',
    description:
      'Beyond just giving answers, ANDL’s AI breaks down the reasoning, offers insights, and sparks deeper thinking—so you truly understand every concept.',
  },
];

/* ------------------------------------------------------------------
 * FeatureCardsCarousel Component
 * -----------------------------------------------------------------*/
const FeatureCardsCarousel: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const timerDuration = 10000; // 5 seconds
  const intervalRef = useRef<number | null>(null);

  /* -------------------------------------------------------------
   * Helper to style each card in a stacked layout
   * - Slowed transition to 0.8s for a more pronounced animation
   * ------------------------------------------------------------ */
  const stackStyles = (index: number) => {
    const offset = index * 8; // vertical offset
    const rotate = index % 2 === 0 ? 2 : -2; // alternate rotation
    return {
      transform: `translateY(${offset}px) rotate(${rotate}deg)`,
      zIndex: cards.length - index,
      transition: 'transform 1.4s ease', // Slower animation
    } as React.CSSProperties;
  };

  /* -------------------------------------------------------------
   * Timer Logic (hidden from UI, but still rotates cards)
   * ------------------------------------------------------------ */
  useEffect(() => {
    // Start fresh each time cards array changes
    const startTime = Date.now();

    // Clear any existing interval
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= timerDuration) {
        // Timer finished: rotate the first card to the end
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
        }
        setCards((prevCards) => {
          const [first, ...rest] = prevCards;
          return [...rest, first];
        });
      }
    }, 50);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [cards]);

  /* -------------------------------------------------------------
   * Drag-and-Drop Logic
   * - If user drags the top card out, we skip it (send it to end)
   * ------------------------------------------------------------ */
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('cardIndex', index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData('cardIndex');
    if (draggedIndex !== '') {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        const index = parseInt(draggedIndex, 10);
        const [removed] = updatedCards.splice(index, 1);
        // Append the dragged card to the end
        updatedCards.push(removed);
        return updatedCards;
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  /* -------------------------------------------------------------
   * Render
   * ------------------------------------------------------------ */
  return (
    <div className="flex flex-col items-center">
      {/* Stacking Container */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative w-80 h-[380px]" // Adjust height to accommodate stacked cards
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            style={stackStyles(index)}
            className="absolute top-0 left-0 w-full"
          >
            <FeatureCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={() => {}}
            />
          </div>
        ))}
      </div>
      {/* No visible timer line anymore */}
    </div>
  );
};

export default FeatureCardsCarousel;
