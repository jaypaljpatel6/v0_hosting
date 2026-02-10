"use client"

import { useState } from "react"
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Say hello
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Feedback
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-full bg-transparent"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="resize-none rounded-lg"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto sm:self-end">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                Email
              </h3>
              <a
                href="mailto:jaypal@example.com"
                className="mt-3 flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">jaypal@example.com</span>
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                Socials
              </h3>
              <div className="mt-3 flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
