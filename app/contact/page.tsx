"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[#24221f] py-40 text-white">
        <div className="container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Schedule a Visit
          </p>

          <h1 className="serif mt-5 max-w-5xl text-6xl md:text-8xl">
            Come see what home feels like.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We would love to welcome you to Corner Stone Senior Living,
            introduce you to our home, and answer your questions.
          </p>
        </div>
      </section>

      <section className="bg-[#eee8dc] py-24">
        <div className="container-luxury grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
              Private Visits
            </p>

            <h2 className="serif mt-5 text-4xl md:text-5xl">
              Let's start a conversation.
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/55">
              Tell us a little about yourself and what you're looking for.
              Someone from our family will follow up with you.
            </p>

            <div className="mt-10 space-y-4 text-sm text-black/60">
              <div>
                <span className="font-medium text-black">Location</span>
                <br />
                Allen, Texas
              </div>

              <div>
                <span className="font-medium text-black">Visits</span>
                <br />
                By private appointment
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f7f4ee] p-7 shadow-[0_25px_80px_rgba(36,34,31,0.08)] md:p-12">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7c8775] text-white">
                  <Check />
                </div>

                <h2 className="serif mt-7 text-4xl">
                  Thank you.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
                  Your inquiry has been received. A member of the Corner Stone
                  family will be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <Select
                  label="Who are you contacting us about?"
                  options={[
                    "Myself",
                    "Parent",
                    "Spouse",
                    "Family Member",
                    "Other",
                  ]}
                />

                <Select
                  label="What would you like to learn about?"
                  options={[
                    "Touring the home",
                    "Living options",
                    "Care",
                    "Availability",
                    "Pricing",
                    "General information",
                  ]}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <Field
                    label="Preferred Visit Date"
                    name="date"
                    type="date"
                  />
                  <Field label="Preferred Time" name="time" type="time" />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-black/50">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#b49a6a]"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#24221f] px-7 py-4 text-xs uppercase tracking-[0.17em] text-white transition hover:bg-[#b49a6a]"
                >
                  Request a Private Visit
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-[11px] leading-5 text-black/40">
                  We respect your privacy and will only use the information
                  you provide to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-black/50">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#b49a6a]"
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-black/50">
        {label}
      </label>

      <select className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#b49a6a]">
        <option value="">Please select</option>

        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}