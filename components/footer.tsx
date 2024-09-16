'use client'

import { useState, useEffect } from 'react'
import { Mail, MapPin } from "lucide-react"
import { usePathname } from 'next/navigation'
import { Modal } from 'antd'

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const modalStyle = isMobile ? {
    width: '95%',
    maxWidth: '400px',
  } : {
    width: '90%',
    maxWidth: '800px',
  }

  const contentStyle = isMobile ? {
    fontSize: '14px',
  } : {}

  const headingStyle = isMobile ? {
    fontSize: '20px',
  } : {}

  const subheadingStyle = isMobile ? {
    fontSize: '18px',
  } : {}

  const privacyContent = (
    <div className="space-y-6" style={contentStyle}>
      <h1 className="text-3xl font-bold" style={headingStyle}>Privacy Policy</h1>
      <p className="text-lg">At ANDL, we value your privacy and are committed to protecting your personal information.</p>
      
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>1. Information We Collect</h2>
      <ul className="list-disc pl-6">
        <li>Personal identification information</li>
        <li>Usage data</li>
        <li>Cookies and tracking technologies</li>
      </ul>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul className="list-disc pl-6">
        <li>Provide and maintain our services</li>
        <li>Improve user experience</li>
        <li>Communicate with you about updates and services</li>
      </ul>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>3. Data Protection</h2>
      <p>We implement industry-standard security measures to protect your data, including:</p>
      <ul className="list-disc pl-6">
        <li>Encryption of sensitive information</li>
        <li>Regular security audits</li>
        <li>Strict access controls</li>
      </ul>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>4. Sharing and Disclosure of Information</h2>
      <ul className="list-disc pl-6">
        <li>Third-party service providers under strict confidentiality</li>
        <li>Compliance with legal obligations</li>
      </ul>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>5. Changes to This Privacy Policy</h2>
      <p>We reserve the right to modify this Privacy Policy at any time. Continued use of our services after modifications constitutes acceptance of the changes.</p>
    </div>
  )

  const termsContent = (
    <div className="space-y-6" style={contentStyle}>
      <h1 className="text-3xl font-bold" style={headingStyle}>Terms and Conditions</h1>
      <p className="text-lg">By using ANDL's services, you agree to comply with these Terms and Conditions.</p>
      
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>1. Use of Services</h2>
      <ol className="list-decimal pl-6">
        <li>You must be at least 18 years old to use our services.</li>
        <li>Provide accurate and complete information when creating an account.</li>
        <li>Maintain the confidentiality of your account credentials.</li>
      </ol>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>2. Intellectual Property</h2>
      <p>All content and materials on ANDL are protected by applicable copyright and trademark laws. Unauthorized use or distribution is prohibited.</p>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>3. Limitation of Liability</h2>
      <ul className="list-disc pl-6">
        <li>ANDL is not liable for any indirect or consequential damages.</li>
        <li>Our liability is limited to the extent permitted by law.</li>
      </ul>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>4. User-Generated Content</h2>
      <p>By submitting content to ANDL, you grant us a non-exclusive license to use and display it within the platform.</p>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>5. Changes to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. Continued use of our services after modifications constitutes acceptance of the new terms.</p>
  
      <h2 className="text-2xl font-semibold" style={subheadingStyle}>6. Governing Law</h2>
      <p>These terms are governed by the laws of the Netherlands, and you agree to submit to the jurisdiction of the courts within this region.</p>
    </div>
  )
  
  return (
    <footer className="bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        {isHomePage && <div className="w-full h-px bg-gray-400" />}
        <div className="px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">ANDL</h2>
            <p className="text-sm text-gray-600">
              Innovating the future of learning responsibly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setIsTermsOpen(true)} className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => setIsPrivacyOpen(true)} className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-600" />
                <a href="mailto:team@andl.io" className="text-gray-600 hover:text-gray-900">
                  team@andl.io
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Mekelweg 5, 2628 CD Delft</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ANDL-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/andl-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ANDL. All rights reserved.
          </p>
        </div>
      </div>

      <Modal
        title="Privacy Policy"
        open={isPrivacyOpen}
        onOk={() => setIsPrivacyOpen(false)}
        onCancel={() => setIsPrivacyOpen(false)}
        style={modalStyle}
        bodyStyle={{ maxHeight: isMobile ? '60vh' : '70vh', overflowY: 'auto' }}
        centered
        footer={null}
      >
        {privacyContent}
      </Modal>

      <Modal
        title="Terms and Conditions"
        open={isTermsOpen}
        onOk={() => setIsTermsOpen(false)}
        onCancel={() => setIsTermsOpen(false)}
        style={modalStyle}
        bodyStyle={{ maxHeight: isMobile ? '60vh' : '70vh', overflowY: 'auto' }}
        centered
        footer={null}
      >
        {termsContent}
      </Modal>
    </footer>
  )
}