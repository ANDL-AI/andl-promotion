"use server"

import { z } from "zod"

// Schema for validation
const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
})

type WaitlistInput = z.infer<typeof waitlistSchema>

/**
 * Server action to submit data to Google Forms
 */
export async function submitToWaitlist(data: WaitlistInput) {
  try {
    // Validate the input data
    const validatedData = waitlistSchema.parse(data)

    // Google Form submission URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfXD1_23vNleu5nwQwP4GyomeN23J45GjAXpCE2P5fTsvHH-Q/formResponse"

    // Create form data
    const formData = new FormData()
    formData.append("entry.40204157", validatedData.name)
    formData.append("entry.187391097", validatedData.email)

    // Submit to Google Forms
    const response = await fetch(googleFormUrl, {
      method: "POST",
      body: formData,
      // No need for no-cors mode on the server
    })

    // Check if the submission was successful
    if (!response.ok && response.status !== 0) {
      // Google Forms often returns status 0 which is actually successful
      console.error("Form submission failed:", response.status)
      return {
        success: false,
        error: `Form submission failed with status: ${response.status}`,
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Error in submitToWaitlist:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

