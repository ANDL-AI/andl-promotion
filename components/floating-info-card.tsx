"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

type FloatingInfoCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  initialX: number;
  initialY: number;
};

function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export function FloatingInfoCard({
  icon,
  title,
  description,
  initialX,
  initialY,
}: FloatingInfoCardProps) {
  // Position motion values
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  // Define maximum allowed rotation (in degrees)
  const maxRotation = 90;

  // Set a random initial rotation within [-maxRotation, maxRotation]
  const initialRotation = (Math.random() * 2 - 1) * maxRotation;
  const rotation = useMotionValue(initialRotation);

  // Random initial velocities for position (pixels per frame)
  const velocity = useRef({
    vx: Math.random() * 1 - 0.5,
    vy: Math.random() * 1 - 0.5,
  });

  // Random angular velocity (degrees per frame)
  const angularVelocity = useRef((Math.random() * 2 - 1) * 0.2);

  // Approximate card size (adjust if needed)
  const cardWidth = 150;
  const cardHeight = 150;

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const update = (time: number) => {
      const dtRaw = time - lastTime;
      // Clamp dt to avoid huge jumps (e.g., when switching tabs)
      const dt = Math.min(dtRaw / 16.67, 5);
      lastTime = time;

      // Update position velocities with slight random acceleration and damping for natural drift
      velocity.current.vx += (Math.random() - 0.5) * 0.05 * dt;
      velocity.current.vy += (Math.random() - 0.5) * 0.05 * dt;
      velocity.current.vx *= 0.995;
      velocity.current.vy *= 0.995;

      let newX = x.get() + velocity.current.vx * dt;
      let newY = y.get() + velocity.current.vy * dt;
      const maxX = window.innerWidth - cardWidth;
      const maxY = window.innerHeight - cardHeight;

      // Bounce off boundaries for x
      if (newX < 0) {
        newX = 0;
        velocity.current.vx = Math.abs(velocity.current.vx);
      } else if (newX > maxX) {
        newX = maxX;
        velocity.current.vx = -Math.abs(velocity.current.vx);
      }

      // Bounce off boundaries for y
      if (newY < 0) {
        newY = 0;
        velocity.current.vy = Math.abs(velocity.current.vy);
      } else if (newY > maxY) {
        newY = maxY;
        velocity.current.vy = -Math.abs(velocity.current.vy);
      }

      x.set(newX);
      y.set(newY);

      // Update rotation with its angular velocity
      const newRotation = rotation.get() + angularVelocity.current * dt;
      if (newRotation > maxRotation) {
        rotation.set(maxRotation);
        angularVelocity.current = -Math.abs(angularVelocity.current);
      } else if (newRotation < -maxRotation) {
        rotation.set(-maxRotation);
        angularVelocity.current = Math.abs(angularVelocity.current);
      } else {
        rotation.set(newRotation);
      }

      // Update angular velocity with slight random acceleration and clamp it
      angularVelocity.current += (Math.random() - 0.5) * 0.02 * dt;
      if (angularVelocity.current > 0.5) angularVelocity.current = 0.5;
      if (angularVelocity.current < -0.5) angularVelocity.current = -0.5;

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [x, y, rotation]);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);

  return (
    <>
      <motion.div
        style={{ x, y, rotate: rotation }}
        className="absolute cursor-pointer select-none"
        onClick={toggleModal}
      >
        <div className="bg-white bg-opacity-80 dark:bg-transparent p-4 rounded-xl shadow-lg backdrop-blur-sm border border-transparent dark:border-white transform hover:scale-110 transition-transform duration-300 dark:hover:bg-white/10">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#AF95E2] to-[#6321E6] rounded-xl flex items-center justify-center transition-transform duration-300 hover:rotate-3">
              {icon}
            </div>
          </div>
          <h3 className="text-md font-semibold mt-2 text-center dark:text-white">{title}</h3>
        </div>
      </motion.div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-700 dark:text-white">{description}</p>
          {/* Insert carousel or additional content here if needed */}
        </Modal>
      )}
    </>
  );
}
