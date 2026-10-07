"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send inquiry.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        "We couldn't send your inquiry right now. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* =====================================================
          PRIVATE VISIT HERO
          ===================================================== */}

      <section className="section section--forest contact-hero">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">Schedule a Private Visit</span>
            </div>

            <div className="editorial__content">
              <h1 className="display-lg">
                Come see what
                <br />
                home feels like.
              </h1>

              <p className="body-large">
                We would love to welcome you to Corner Stone Senior Living,
                introduce you to our home, and answer your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT + FORM
          ===================================================== */}

      <section className="section section--cream">
        <div className="container">
          <div className="contact-layout">
            {/* =================================================
                VISIT INFORMATION
                ================================================= */}

            <div className="contact-details">
              <span className="eyebrow">Your Visit</span>

              <h2 className="contact-details__title">
                A conversation
                <br />
                begins here.
              </h2>

              <p className="body-copy">
                Tell us a little about yourself and what you're looking for.
                A member of the Corner Stone family will follow up personally.
              </p>

              <div className="contact-details__list">
                <div className="contact-details__item">
                  <span className="eyebrow">Location</span>
                  <p>Allen, Texas</p>
                </div>

                <div className="contact-details__item">
                  <span className="eyebrow">Visits</span>
                  <p>By private appointment</p>
                </div>

                <div className="contact-details__item">
                  <span className="eyebrow">Experience</span>
                  <p>
                    Meet our family, tour the home, and learn more about life
                    at Corner Stone.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                INQUIRY FORM
                ================================================= */}

            <div className="contact-form">
              {submitted ? (
                <div className="contact-success">
                  <span className="eyebrow">Inquiry Received</span>

                  <h2 className="display-md">Thank you.</h2>

                  <p className="body-copy">
                    Your inquiry has been received. A member of the Corner
                    Stone family will be in touch with you soon.
                  </p>

                  <button
                    type="button"
                    className="button button--dark"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form__header">
                    <span className="eyebrow">Private Visit Request</span>

                    <p>
                      Share a few details and we'll help arrange a time that
                      works for you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="form">
                    <div className="form__grid">
                      <Field
                        label="First Name"
                        name="firstName"
                        required
                      />

                      <Field
                        label="Last Name"
                        name="lastName"
                        required
                      />

                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        required
                      />

                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                      />

                      <LuxurySelect
                        label="I'm contacting you about"
                        name="relationship"
                        options={[
                          "Myself",
                          "Parent",
                          "Spouse",
                          "Family Member",
                          "Other",
                        ]}
                      />

                      <LuxurySelect
                        label="I'm interested in"
                        name="interest"
                        options={[
                          "Touring the home",
                          "Living options",
                          "Care",
                          "Availability",
                          "Pricing",
                          "General information",
                        ]}
                      />

                      <LuxuryDatePicker
                        label="Preferred Visit Date"
                        name="date"
                      />

                      <LuxuryTimePicker
                        label="Preferred Time"
                        name="time"
                      />

                      <div className="form__field form__field--full">
                        <label
                          htmlFor="message"
                          className="form__label"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          className="form__textarea"
                          placeholder="Tell us a little about what you're looking for..."
                          rows={5}
                        />
                      </div>
                    </div>

                    <div className="form__submit">
                      <button
                        type="submit"
                        className="button button--dark"
                        disabled={submitting}
                      >
                        {submitting
                          ? "Sending Request..."
                          : "Request a Private Visit"}
                      </button>
                    </div>

                    {error && (
                      <p
                        className="contact-form__error"
                        role="alert"
                      >
                        {error}
                      </p>
                    )}

                    <p className="contact-form__privacy">
                      Your information is kept private and will only be used
                      to respond to your inquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
          ===================================================== */}

      <section className="section section--light contact-closing">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Corner Stone Senior Living
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                The comfort of home.
                <br />
                The quality of exceptional care.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   STANDARD FIELD
   ============================================================ */

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
    <div className="form__field">
      <label htmlFor={name} className="form__label">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="form__input"
      />
    </div>
  );
}

/* ============================================================
   LUXURY SELECT
   ============================================================ */

function LuxurySelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`form__field luxury-select ${
        open ? "luxury-select--open" : ""
      }`}
      ref={wrapperRef}
    >
      <label className="form__label">{label}</label>

      <input
        type="hidden"
        name={name}
        value={value}
      />

      <button
        type="button"
        className={`luxury-select__trigger ${
          value ? "luxury-select__trigger--selected" : ""
        }`}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        <span>{value || "Please select"}</span>

        <span
          className={`luxury-select__chevron ${
            open ? "luxury-select__chevron--open" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {open && (
        <div className="luxury-select__menu">
          <div className="luxury-select__menu-inner">
            <div className="luxury-select__menu-label">
              Select an option
            </div>

            {options.map((option) => (
              <button
                type="button"
                key={option}
                className={`luxury-select__option ${
                  value === option
                    ? "luxury-select__option--active"
                    : ""
                }`}
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
              >
                <span>{option}</span>

                {value === option && (
                  <span className="luxury-select__check">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   LUXURY DATE PICKER
   ============================================================ */

function LuxuryDatePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState(new Date());

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const monthName = viewDate.toLocaleString("en-US", {
    month: "long",
  });

  const formattedDate = date
    ? date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  function previousMonth() {
    setViewDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setViewDate(new Date(year, month + 1, 1));
  }

  function selectDate(day: number) {
    const selected = new Date(year, month, day);

    setDate(selected);
    setOpen(false);
  }

  return (
    <div
      className={`form__field luxury-date ${
        open ? "luxury-date--open" : ""
      }`}
      ref={wrapperRef}
    >
      <label className="form__label">{label}</label>

      <input
        type="hidden"
        name={name}
        value={
          date
            ? date.toISOString().split("T")[0]
            : ""
        }
      />

      <button
        type="button"
        className={`luxury-date__trigger ${
          date ? "luxury-date__trigger--selected" : ""
        }`}
        onClick={() => setOpen((current) => !current)}
      >
        <span>
          {formattedDate || "Select a date"}
        </span>

        <span className="luxury-date__icon">
          ◫
        </span>
      </button>

      {open && (
        <div className="luxury-calendar">
          <div className="luxury-calendar__top">
            <div>
              <span className="luxury-calendar__eyebrow">
                Private Visit
              </span>

              <div className="luxury-calendar__month">
                {monthName} {year}
              </div>
            </div>

            <div className="luxury-calendar__navigation">
              <button
                type="button"
                onClick={previousMonth}
                aria-label="Previous month"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextMonth}
                aria-label="Next month"
              >
                ›
              </button>
            </div>
          </div>

          <div className="luxury-calendar__divider" />

          <div className="luxury-calendar__weekdays">
            {["S", "M", "T", "W", "T", "F", "S"].map(
              (day, index) => (
                <span key={`${day}-${index}`}>
                  {day}
                </span>
              )
            )}
          </div>

          <div className="luxury-calendar__days">
            {Array.from({ length: firstDay }).map(
              (_, index) => (
                <span
                  key={`empty-${index}`}
                  className="luxury-calendar__empty"
                />
              )
            )}

            {Array.from(
              { length: daysInMonth },
              (_, index) => index + 1
            ).map((day) => {
              const isSelected =
                date &&
                date.getFullYear() === year &&
                date.getMonth() === month &&
                date.getDate() === day;

              const today = new Date();

              const isToday =
                today.getFullYear() === year &&
                today.getMonth() === month &&
                today.getDate() === day;

              return (
                <button
                  type="button"
                  key={day}
                  className={`luxury-calendar__day ${
                    isSelected
                      ? "luxury-calendar__day--selected"
                      : ""
                  } ${
                    isToday
                      ? "luxury-calendar__day--today"
                      : ""
                  }`}
                  onClick={() => selectDate(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="luxury-calendar__footer">
            <span>
              Choose a preferred date for your private visit.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   LUXURY TIME PICKER
   ============================================================ */

function LuxuryTimePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const times = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  function convertTo24Hour(value: string) {
    const [timePart, modifier] = value.split(" ");

    let [hours, minutes] = timePart
      .split(":")
      .map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }

    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;
  }

  return (
    <div
      className={`form__field luxury-time ${
        open ? "luxury-time--open" : ""
      }`}
      ref={wrapperRef}
    >
      <label className="form__label">{label}</label>

      <input
        type="hidden"
        name={name}
        value={time ? convertTo24Hour(time) : ""}
      />

      <button
        type="button"
        className={`luxury-time__trigger ${
          time ? "luxury-time__trigger--selected" : ""
        }`}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{time || "Select a time"}</span>

        <span className="luxury-time__icon">
          ◷
        </span>
      </button>

      {open && (
        <div className="luxury-time__menu">
          <div className="luxury-time__header">
            <div>
              <span className="luxury-time__eyebrow">
                Private Visit
              </span>

              <strong>Select a preferred time</strong>
            </div>
          </div>

          <div className="luxury-time__options">
            {times.map((option) => (
              <button
                type="button"
                key={option}
                className={`luxury-time__option ${
                  time === option
                    ? "luxury-time__option--active"
                    : ""
                }`}
                onClick={() => {
                  setTime(option);
                  setOpen(false);
                }}
              >
                <span>{option}</span>

                {time === option && (
                  <span className="luxury-time__check">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}