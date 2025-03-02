"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"
import { submitToWaitlist } from "./waitlistValidation"
import FloatingHeader from "@/components/header-waitlist"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/animation"

// Schema to include name field
const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
})

type WaitlistInput = z.infer<typeof waitlistSchema>

export default function WaitlistPage() {
  const [enrolledCount, setEnrolledCount] = useState<number | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
  })

  // Fetch enrolled count on component mount
  useEffect(() => {
    const fetchEnrolledCount = async () => {
      try {
        const sheetUrl =
          "https://docs.google.com/spreadsheets/d/1SXOKY2N0dHNint8-coR8CBzJzMUoVihciV7LbBJ18SE/gviz/tq?tqx=out:csv&gid=1990761926"
        const response = await fetch(sheetUrl)
        const data = await response.text()
        const rows = data.split("\n")
        const count = rows.length - 1 // Exclude header row
        setEnrolledCount(count)
      } catch (error) {
        console.error("Error fetching enrolled count:", error)
      }
    }

    fetchEnrolledCount()
  }, [])

  const onSubmit = async (data: WaitlistInput) => {
    try {
      setErrorMessage(null)

      // Use the server action to submit the form
      const result = await submitToWaitlist(data)

      if (result.success) {
        // Clear the form
        reset()
        setSuccessMessage("Thank you for joining the waitlist! We'll contact you soon.")

        // Update the enrolled count
        if (enrolledCount !== null) {
          setEnrolledCount(enrolledCount + 1)
        }

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      } else {
        setErrorMessage(result.error || "An error occurred while submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("An error occurred while submitting the form. Please try again.")
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="h-full w-full overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <FloatingHeader />
      </motion.div>

      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 w-full dark:bg-gray-900">
        <BackgroundAnimation/>
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl p-8 md:p-10"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">Join the Waitlist</h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Sign up for early access to ANDL</p>
          </motion.div>

          {enrolledCount !== null && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-center mb-6 text-gray-500 dark:text-gray-400">
                <span className="font-medium">{enrolledCount}</span> people have already joined
              </p>
            </motion.div>
          )}

          <motion.form
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium dark:text-gray-200">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium dark:text-gray-200">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#0f172a] hover:bg-[#1e293b] dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </div>
              ) : (
                "Join Waitlist"
              )}
            </motion.button>
          </motion.form>

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center p-4 rounded-lg bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-300"
            >
              {successMessage}
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center p-4 rounded-lg bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-300"
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="w-full"
      >
        <Footer />
      </motion.div>
    </div>
  )
}