"use client";

import { useEffect, useMemo, useState } from "react";
import * as Select from "@radix-ui/react-select";
import * as Popover from "@radix-ui/react-popover";
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
} from "lucide-react";

type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

const relationshipOptions = [
  "Myself",
  "Parent",
  "Spouse",
  "Family Member",
  "Other",
];

const interestOptions = [
  "Touring the home",
  "Living options",
  "Care",
  "Availability",
  "Pricing",
  "General information",
];

const timeOptions = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

function formatTime(time: string) {
  const [hourString, minute] = time.split(":");
  const hour = Number(hourString);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minute} ${period}`;
}

function formatDate(date: string) {
  if (!date) return "";

  const parsed = new Date(`${date}T12:00:00`);

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getToday(): CalendarDate {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
  };
}

function isSameDate(a: CalendarDate, b: CalendarDate) {
  return (
    a.year === b.year &&
    a.month === b.month &&
    a.day === b.day
  );
}

function isBeforeToday(
  date: CalendarDate,
  today: CalendarDate
) {
  const current = new Date(
    date.year,
    date.month,
    date.day
  );

  const minimum = new Date(
    today.year,
    today.month,
    today.day
  );

  return current < minimum;
}

/* =========================================================
   Luxury Select
   ========================================================= */

function LuxurySelect({
  name,
  value,
  onChange,
  placeholder,
  options,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="luxury-select">
      <Select.Root
        value={value}
        onValueChange={onChange}
      >
        <Select.Trigger
          className={`luxury-select__trigger ${
            value
              ? "luxury-select__trigger--selected"
              : ""
          }`}
          aria-label={placeholder}
        >
          <Select.Value placeholder={placeholder} />

          <Select.Icon>
            <ChevronDown
              size={17}
              strokeWidth={1.5}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="luxury-select__content"
            position="popper"
            sideOffset={8}
          >
            <Select.Viewport className="luxury-select__viewport">
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  className="luxury-select__item"
                >
                  <Select.ItemText>
                    {option}
                  </Select.ItemText>

                  <Select.ItemIndicator className="luxury-select__indicator">
                    <Check
                      size={15}
                      strokeWidth={1.5}
                    />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <input
        type="hidden"
        name={name}
        value={value}
      />
    </div>
  );
}

/* =========================================================
   Luxury Date Picker
   ========================================================= */

function LuxuryDatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [today, setToday] =
    useState<CalendarDate | null>(null);

  const [viewYear, setViewYear] =
    useState<number | null>(null);

  const [viewMonth, setViewMonth] =
    useState<number | null>(null);

  const [open, setOpen] = useState(false);

  /*
   * Important:
   * The current date is intentionally read after mount.
   * This prevents Next.js 16 from treating new Date()
   * as a dynamic value during prerendering.
   */
  useEffect(() => {
    const current = getToday();

    setToday(current);

    if (value) {
      const selected = new Date(
        `${value}T12:00:00`
      );

      setViewYear(selected.getFullYear());
      setViewMonth(selected.getMonth());
    } else {
      setViewYear(current.year);
      setViewMonth(current.month);
    }
  }, [value]);

  const days = useMemo(() => {
    if (viewYear === null || viewMonth === null) {
      return [];
    }

    const firstDay = new Date(
      viewYear,
      viewMonth,
      1
    ).getDay();

    const daysInMonth = new Date(
      viewYear,
      viewMonth + 1,
      0
    ).getDate();

    const previousMonthDays = new Date(
      viewYear,
      viewMonth,
      0
    ).getDate();

    const calendarDays: Array<{
      day: number;
      monthOffset: number;
    }> = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      calendarDays.push({
        day: previousMonthDays - i,
        monthOffset: -1,
      });
    }

    for (
      let day = 1;
      day <= daysInMonth;
      day++
    ) {
      calendarDays.push({
        day,
        monthOffset: 0,
      });
    }

    let nextDay = 1;

    while (calendarDays.length < 42) {
      calendarDays.push({
        day: nextDay++,
        monthOffset: 1,
      });
    }

    return calendarDays;
  }, [viewYear, viewMonth]);

  function moveMonth(direction: number) {
    if (
      viewYear === null ||
      viewMonth === null
    ) {
      return;
    }

    const next = new Date(
      viewYear,
      viewMonth + direction,
      1
    );

    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  }

  function selectDate(
    day: number,
    monthOffset: number
  ) {
    if (
      monthOffset !== 0 ||
      today === null ||
      viewYear === null ||
      viewMonth === null
    ) {
      return;
    }

    const selected: CalendarDate = {
      year: viewYear,
      month: viewMonth,
      day,
    };

    if (isBeforeToday(selected, today)) {
      return;
    }

    const iso = [
      selected.year,
      String(selected.month + 1).padStart(2, "0"),
      String(selected.day).padStart(2, "0"),
    ].join("-");

    onChange(iso);
    setOpen(false);
  }

  const selectedDate = value
    ? (() => {
        const parsed = new Date(
          `${value}T12:00:00`
        );

        return {
          year: parsed.getFullYear(),
          month: parsed.getMonth(),
          day: parsed.getDate(),
        };
      })()
    : null;

  /*
   * Render a stable placeholder during prerender.
   * The actual current date appears immediately after mount.
   */
  if (
    today === null ||
    viewYear === null ||
    viewMonth === null
  ) {
    return (
      <div className="luxury-picker">
        <button
          type="button"
          className="luxury-picker__trigger"
          disabled
        >
          <span className="luxury-picker__placeholder">
            Select a preferred date
          </span>

          <CalendarDays
            size={18}
            strokeWidth={1.4}
          />
        </button>

        <input
          type="hidden"
          name="date"
          value={value}
        />
      </div>
    );
  }

  const monthName = new Date(
    viewYear,
    viewMonth,
    1
  ).toLocaleDateString("en-US", {
    month: "long",
  });

  return (
    <div className="luxury-picker">
      <Popover.Root
        open={open}
        onOpenChange={setOpen}
      >
        <Popover.Trigger asChild>
          <button
            type="button"
            className={`luxury-picker__trigger ${
              value
                ? "luxury-picker__trigger--selected"
                : ""
            }`}
          >
            <span>
              {value
                ? formatDate(value)
                : "Select a preferred date"}
            </span>

            <CalendarDays
              size={18}
              strokeWidth={1.4}
            />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="luxury-calendar"
            sideOffset={10}
            align="start"
          >
            <div className="luxury-calendar__header">
              <div className="luxury-calendar__month">
                <span className="luxury-calendar__month-name">
                  {monthName}
                </span>

                <span className="luxury-calendar__year">
                  {viewYear}
                </span>
              </div>

              <div className="luxury-calendar__navigation">
                <button
                  type="button"
                  onClick={() => moveMonth(-1)}
                  aria-label="Previous month"
                  className="luxury-calendar__nav-button"
                >
                  <ChevronLeft
                    size={17}
                    strokeWidth={1.4}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => moveMonth(1)}
                  aria-label="Next month"
                  className="luxury-calendar__nav-button"
                >
                  <ChevronRight
                    size={17}
                    strokeWidth={1.4}
                  />
                </button>
              </div>
            </div>

            <div className="luxury-calendar__weekdays">
              {[
                "S",
                "M",
                "T",
                "W",
                "T",
                "F",
                "S",
              ].map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className="luxury-calendar__weekday"
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="luxury-calendar__days">
              {days.map(
                (calendarDay, index) => {
                  const actualDate = new Date(
                    viewYear,
                    viewMonth +
                      calendarDay.monthOffset,
                    calendarDay.day
                  );

                  const calendarDate: CalendarDate =
                    {
                      year: actualDate.getFullYear(),
                      month: actualDate.getMonth(),
                      day: actualDate.getDate(),
                    };

                  const disabled =
                    calendarDay.monthOffset !== 0 ||
                    isBeforeToday(
                      calendarDate,
                      today
                    );

                  const selected =
                    selectedDate &&
                    isSameDate(
                      calendarDate,
                      selectedDate
                    );

                  const isToday =
                    isSameDate(
                      calendarDate,
                      today
                    );

                  return (
                    <button
                      key={`${index}-${calendarDay.day}`}
                      type="button"
                      disabled={disabled}
                      onClick={() =>
                        selectDate(
                          calendarDay.day,
                          calendarDay.monthOffset
                        )
                      }
                      className={[
                        "luxury-calendar__day",
                        calendarDay.monthOffset !== 0
                          ? "luxury-calendar__day--muted"
                          : "",
                        disabled
                          ? "luxury-calendar__day--disabled"
                          : "",
                        isToday
                          ? "luxury-calendar__day--today"
                          : "",
                        selected
                          ? "luxury-calendar__day--selected"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {calendarDay.day}
                    </button>
                  );
                }
              )}
            </div>

            <div className="luxury-calendar__footer">
              <span>
                Private visits are by appointment.
              </span>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <input
        type="hidden"
        name="date"
        value={value}
      />
    </div>
  );
}

/* =========================================================
   Luxury Time Picker
   ========================================================= */

function LuxuryTimePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="luxury-picker">
      <Popover.Root
        open={open}
        onOpenChange={setOpen}
      >
        <Popover.Trigger asChild>
          <button
            type="button"
            className={`luxury-picker__trigger ${
              value
                ? "luxury-picker__trigger--selected"
                : ""
            }`}
          >
            <span>
              {value
                ? formatTime(value)
                : "Select a preferred time"}
            </span>

            <Clock3
              size={18}
              strokeWidth={1.4}
            />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="luxury-time"
            sideOffset={10}
            align="start"
          >
            <div className="luxury-time__header">
              <p className="luxury-time__title">
                Preferred time
              </p>

              <p className="luxury-time__subtitle">
                Select a time for your private visit.
              </p>
            </div>

            <div className="luxury-time__grid">
              {timeOptions.map((time) => {
                const selected =
                  value === time;

                return (
                  <button
                    type="button"
                    key={time}
                    onClick={() => {
                      onChange(time);
                      setOpen(false);
                    }}
                    className={`luxury-time__option ${
                      selected
                        ? "luxury-time__option--selected"
                        : ""
                    }`}
                  >
                    {formatTime(time)}
                  </button>
                );
              })}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <input
        type="hidden"
        name="time"
        value={value}
      />
    </div>
  );
}

/* =========================================================
   Contact Page
   ========================================================= */

export default function ContactPage() {
  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const [relationship, setRelationship] =
    useState("");

  const [interest, setInterest] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = Object.fromEntries(
      formData.entries()
    );

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Unable to send inquiry."
        );
      }

      form.reset();

      setRelationship("");
      setInterest("");
      setDate("");
      setTime("");

      setSubmitted(true);
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setError(
        "We couldn't send your inquiry right now. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="contact-page">
        <section className="contact-success">
          <div className="container">
            <div className="contact-success__content">
              <p className="eyebrow">
                Corner Stone Senior Living
              </p>

              <h1>
                Inquiry
                <br />
                Received.
              </h1>

              <p>
                Thank you for reaching out to
                Corner Stone Senior Living. A
                member of our family will be in
                touch shortly to discuss your
                visit.
              </p>

              <button
                type="button"
                className="button button--dark"
                onClick={() =>
                  setSubmitted(false)
                }
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <p className="eyebrow">
              Private Visits · Allen, Texas
            </p>

            <h1>
              A beautiful
              <br />
              place to
              <br />
              <em>call home.</em>
            </h1>

            <p>
              We invite you to experience
              Corner Stone in person. Meet our
              family, explore the home, and
              discover an environment thoughtfully
              designed around comfort, dignity,
              and exceptional care.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILS + FORM
          ===================================================== */}

      <section className="contact-details">
        <div className="container">
          <div className="contact-details__grid">
            <div className="contact-details__intro">
              <p className="eyebrow">
                Visit Corner Stone
              </p>

              <h2>
                Come see
                <br />
                <em>the difference.</em>
              </h2>

              <p>
                Every visit is personal. We
                welcome families to spend time
                in the home, ask questions, and
                get a genuine sense of what
                everyday life at Corner Stone
                feels like.
              </p>

              <div className="contact-details__info">
                <div className="contact-info-row">
                  <span className="contact-info-row__label">
                    Location
                  </span>

                  <p className="contact-info-row__value">
                    Allen, Texas
                  </p>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-row__label">
                    Visits
                  </span>

                  <p className="contact-info-row__value">
                    Private &amp; by appointment
                  </p>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-row__label">
                    Care
                  </span>

                  <p className="contact-info-row__value">
                    Family-owned &amp;
                    family-operated
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FORM
                ================================================= */}

            <div className="contact-form-wrap">
              <div className="contact-form-heading">
                <p className="eyebrow">
                  Start a conversation
                </p>

                <h2>
                  Request a Private Visit
                </h2>

                <p>
                  Tell us a little about yourself
                  and how we can help.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>
                    Relationship to the
                    prospective resident
                  </label>

                  <LuxurySelect
                    name="relationship"
                    value={relationship}
                    onChange={setRelationship}
                    placeholder="Select an option"
                    options={
                      relationshipOptions
                    }
                  />
                </div>

                <div className="form-field">
                  <label>
                    I'm interested in
                  </label>

                  <LuxurySelect
                    name="interest"
                    value={interest}
                    onChange={setInterest}
                    placeholder="Select an option"
                    options={interestOptions}
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>
                      Preferred Date
                    </label>

                    <LuxuryDatePicker
                      value={date}
                      onChange={setDate}
                    />
                  </div>

                  <div className="form-field">
                    <label>
                      Preferred Time
                    </label>

                    <LuxuryTimePicker
                      value={time}
                      onChange={setTime}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    Message{" "}
                    <span>(Optional)</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us anything you'd like us to know."
                  />
                </div>

                {error && (
                  <p className="contact-form__error">
                    {error}
                  </p>
                )}

                <div className="contact-form__submit">
                  <button
                    type="submit"
                    className="button button--dark"
                    disabled={submitting}
                  >
                    {submitting
                      ? "Sending Request..."
                      : "Request a Private Visit"}
                  </button>

                  <p className="contact-form__note">
                    We typically respond within
                    one business day.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
          ===================================================== */}

      <section className="contact-closing">
        <div className="container">
          <div className="contact-closing__content">
            <p className="eyebrow">
              Where care feels like family
            </p>

            <h2>
              We look forward
              <br />
              to welcoming
              <br />
              <em>you home.</em>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}