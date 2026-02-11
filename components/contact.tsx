"use client"

import { useState, useEffect, useCallback } from "react"
import { Send, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { supabase, type Feedback } from "@/lib/supabase"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  )
}

function FeedbackCard({ feedback }: { feedback: Feedback }) {
  const date = new Date(feedback.created_at)
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
        <div className="space-y-1">
          <p className="font-semibold text-foreground">{feedback.name}</p>
          <StarRating rating={feedback.rating} />
        </div>
        <time className="text-xs text-muted-foreground shrink-0" dateTime={feedback.created_at}>
          {formattedDate}
        </time>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {feedback.message}
        </p>
      </CardContent>
    </Card>
  )
}

export function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState<number>(3)
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFeedbacks = useCallback(async () => {
    const { data, error } = await supabase
      .from("feedbacks")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching feedbacks:", error)
      setError("Failed to load feedback")
      return
    }
    setFeedbacks(data ?? [])
  }, [])

  useEffect(() => {
    fetchFeedbacks()
  }, [fetchFeedbacks])

  useEffect(() => {
    const channel = supabase
      .channel("feedbacks-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedbacks" },
        () => {
          fetchFeedbacks()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchFeedbacks])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const { data, error } = await supabase
      .from("feedbacks")
      .insert([{ name, message, rating }])
      .select()
      .single()

    setIsSubmitting(false)

    if (error) {
      setError(error.message || "Failed to submit feedback")
      return
    }

    if (data) {
      setFeedbacks((prev) => [data, ...prev])
    }

    setName("")
    setMessage("")
    setRating(3)
  }

  return (
    <section id="feedback" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Share your thoughts
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Feedback
        </h2>

        <div className="mt-12 space-y-12">
          {/* Form */}
          <div className="max-w-2xl">
            <form
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Feedback message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your feedback here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="resize-none rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium text-foreground">
                  Rating (1–5)
                </Label>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-muted text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full sm:w-auto sm:self-end"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Submitting…" : "Submit"}
              </Button>
            </form>
          </div>

          {/* Feedback cards */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              Recent feedback
            </h3>
            {feedbacks.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center text-sm text-muted-foreground">
                No feedback yet. Be the first to share your thoughts!
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {feedbacks.map((feedback) => (
                  <FeedbackCard key={feedback.id} feedback={feedback} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
