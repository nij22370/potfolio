"use client"

import { useState, FormEvent } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xppzynnd', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-green-400 text-lg font-medium mb-2">
          ✓ Message sent!
        </p>
        <p className="text-zinc-400 text-sm">
          Thanks! I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[var(--spacing-md)]">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-[var(--spacing-md)] py-[var(--spacing-md)] bg-[var(--color-surface)] border border-[#3E7BFA]/20 rounded-[var(--radius-2xl)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[#3E7BFA]/50 transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full px-[var(--spacing-md)] py-[var(--spacing-md)] bg-[var(--color-surface)] border border-[#3E7BFA]/20 rounded-[var(--radius-2xl)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[#3E7BFA]/50 transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full px-[var(--spacing-md)] py-[var(--spacing-md)] bg-[var(--color-surface)] border border-[#3E7BFA]/20 rounded-[var(--radius-2xl)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[#3E7BFA]/50 transition-all duration-300 resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please email me directly at{' '}
          <a 
            href="mailto:sandeshd531@gmail.com"
            className="underline hover:text-red-300"
          >
            sandeshd531@gmail.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-[var(--spacing-md)] bg-[#3E7BFA] hover:bg-[#6095FF] text-[var(--color-text-on-accent)] font-medium rounded-[var(--radius-pill)] text-[var(--font-body-base)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
