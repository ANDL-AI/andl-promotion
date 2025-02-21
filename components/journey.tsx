"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface JourneyEvent {
  id: number;
  date: string;
  title: string;
  text: string;
  image?: string;
}

const events: JourneyEvent[] = [
  {
    id: 1,
    date: "Nov 2023",
    title: "Vrije University Hackathon",
    text: "ANDL came to be as a winning ideathon project back in 2023. Despite earning a funding contingent on building at the time, the team did not pursue ANDL then.",
  },
  {
    id: 2,
    date: "Aug 2024",
    title: "ANDL Official",
    text: "In August 2024, with all of us starting the final year of our bachleor, we (Sagar, Atilla, Manu, and Neel) officially got to developing ANDL. It was a matter of couple of months before we were running our first pilot at TU Delft.",
  },
  {
    id: 3,
    date: "Dec 2024",
    title: "Yes Delft: Validation Lab",
    text: "We were accepted into the Yes Delft incubator. This is when we were able to find our target and validate ANDL.",
  },
  {
    id: 4,
    date: "Today",
    title: "Where We Are Now",
    text: "Today, we continue our journey with passion and dedication, shaping the future and laying the groundwork for AI in education. More exciting updates coming soon!",
  },
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: JourneyEvent | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, event }) => {
  return (
    <AnimatePresence>
      {isOpen && event && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full mx-4"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto mb-4 rounded"
              />
            )}
            <h3 className="text-2xl font-bold mb-2 dark:text-[#F9FAFB]">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{event.date}</p>
            <p className="text-gray-700 dark:text-gray-200">{event.text}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function JourneyTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<JourneyEvent | null>(null);

  return (
    <div id="journey" className="relative py-12 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Our Journey
      </h2>
      <div className="relative container mx-auto px-4">
        {/* Horizontal timeline line */}
        <div className="absolute top-1/2 left-0 w-full border-t-2 border-gray-300 dark:border-gray-600"></div>
        <div className="flex justify-between items-center">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative flex flex-col items-center cursor-pointer"
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              onClick={() => setSelectedEvent(event)}
            >
              <CheckCircle className="w-10 h-10 text-[#636FF6]" />
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {event.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!selectedEvent}
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
