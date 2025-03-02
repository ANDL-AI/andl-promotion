"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section
      id="not found"
      className="relative min-h-screen overflow-hidden dark:bg-[#1F2937] flex flex-col justify-center"
    >
      <h1 className="text-center justify-center text-2xl font-bold leading-tight text-[#111827] dark:text-[#F9FAFB]">
        <span>Page Not Found, Redirecting...</span>
      </h1>
    </section>
  );
}
