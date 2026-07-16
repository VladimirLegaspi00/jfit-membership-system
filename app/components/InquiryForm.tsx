"use client";

import { FormEvent, useState } from "react";

const membershipOptions = [
  "1 Month — ₱1,400",
  "3 Months — ₱3,200",
  "6 Months — ₱5,200",
  "12 Months — ₱9,200",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-amber-300/30 bg-amber-300/[0.06] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 font-bold text-zinc-950">
          ✓
        </div>

        <h3 className="mt-5 text-2xl font-bold">Inquiry received!</h3>

        <p className="mt-3 leading-7 text-zinc-400">
          Thank you for your interest in JFIT. This is currently a local demo,
          so the inquiry has not yet been saved to a database.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-zinc-700 px-6 py-3 font-semibold transition hover:border-white"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-left sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Full name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Juan Dela Cruz"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Mobile number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="09XX XXX XXXX"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="juan@email.com"
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
        />
      </div>

      <div>
        <label
          htmlFor="membershipPlan"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Interested membership plan
        </label>

        <select
          id="membershipPlan"
          name="membershipPlan"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-amber-300"
        >
          <option value="" disabled>
            Select a plan
          </option>

          {membershipOptions.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="fitnessGoal"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Fitness goal
        </label>

        <select
          id="fitnessGoal"
          name="fitnessGoal"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-amber-300"
        >
          <option value="" disabled>
            Select your primary goal
          </option>
          <option value="Build muscle">Build muscle</option>
          <option value="Lose weight">Lose weight</option>
          <option value="Improve strength">Improve strength</option>
          <option value="Improve endurance">Improve endurance</option>
          <option value="General fitness">General fitness</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Message or question
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us anything we should know..."
          className="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-amber-300 px-8 py-4 font-bold text-zinc-950 transition hover:bg-amber-200"
      >
        Submit Inquiry
      </button>

      <p className="text-center text-xs leading-5 text-zinc-600">
        Demo form only. Database storage will be added in the next development
        phase.
      </p>
    </form>
  );
}