"use client";

import { useState } from "react";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-16">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-pink via-lavender to-blue text-3xl mb-6">
          🎉
        </div>
        <h1 className="font-display text-2xl font-semibold text-slate mb-2">
          Thanks for the feedback!
        </h1>
        <p className="text-base text-slate/70 mb-8 max-w-sm">
          We really appreciate you taking the time to share your thoughts with
          us.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", email: "", phone: "", message: "" });
            setStatus("idle");
          }}
          className="text-sm font-medium bg-lavender text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-slate mb-4">
        Share Your Feedback
      </h1>
      <p className="text-xs font-semibold uppercase tracking-widest text-lavender mb-8">
        {"We'd love to hear from you"}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-white shadow-sm border border-slate/10 rounded-xl px-4 py-3 text-slate placeholder-slate/40 focus:outline-none focus:ring-2 focus:ring-lavender/40 focus:border-lavender transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-white shadow-sm border border-slate/10 rounded-xl px-4 py-3 text-slate placeholder-slate/40 focus:outline-none focus:ring-2 focus:ring-lavender/40 focus:border-lavender transition"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number (optional)"
          value={form.phone}
          onChange={handleChange}
          className="bg-white shadow-sm border border-slate/10 rounded-xl px-4 py-3 text-slate placeholder-slate/40 focus:outline-none focus:ring-2 focus:ring-lavender/40 focus:border-lavender transition"
        />
        <textarea
          name="message"
          placeholder="Write your feedback…"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-white shadow-sm border border-slate/10 rounded-xl px-4 py-3 text-slate placeholder-slate/40 focus:outline-none focus:ring-2 focus:ring-lavender/40 focus:border-lavender transition resize-none"
        />

        {status === "error" && (
          <p className="text-sm text-pink-dark">
            Something went wrong — please try again in a moment.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="self-start text-sm font-medium bg-lavender shadow-sm text-white rounded-full px-8 py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send Feedback"}
        </button>
      </form>
    </div>
  );
}
