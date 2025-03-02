"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { submitToWaitlist } from "./waitlistValidation"

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
  useState(() => {
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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      {/* ANDL Logo */}
      <div className="text-5xl font-bold mb-12">ANDL</div>

      {/* Card Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Join the Waitlist</h2>

        <p className="text-center text-gray-600 mb-8">Sign up for early access to ANDL</p>

        {enrolledCount !== null && (
          <p className="text-sm text-center mb-6 text-gray-500">
            <span className="font-medium">{enrolledCount}</span> people have already joined
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              "Submit"
            )}
          </button>
        </form>

        {successMessage && (
          <div className="mt-6 text-center p-4 rounded-md bg-green-50 text-green-600">{successMessage}</div>
        )}

        {errorMessage && <div className="mt-6 text-center p-4 rounded-md bg-red-50 text-red-600">{errorMessage}</div>}
      </div>
    </section>
  )
}

