"use client";

import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const CONTACT_EMAIL = "chayensan3@gmail.com";
const OPEN_CONTACT_EVENT = "portfolio:open-contact-modal";
const MODAL_EXIT_DURATION = 220;

type ContactTriggerProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactTrigger({
  children,
  className,
  ariaLabel = "Open contact form",
}: ContactTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_EVENT))}
    >
      {children}
    </button>
  );
}

export default function ContactModal() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const openModal = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsMounted(true);
    window.requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);

    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
      closeTimerRef.current = null;
    }, MODAL_EXIT_DURATION);
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_CONTACT_EVENT, openModal);

    return () => {
      window.removeEventListener(OPEN_CONTACT_EVENT, openModal);
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, [openModal]);

  useEffect(() => {
    if (!isMounted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (isVisible) nameInputRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeModal, isMounted, isVisible]);

  const updateField =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((currentForm) => ({
        ...currentForm,
        [field]: event.target.value,
      }));
    };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name.trim() || "website"}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    closeModal();
  };

  if (!isMounted) return null;

  return (
    <div
      className={`contact-modal-shell${isVisible ? " is-visible" : ""}`}
      role="presentation"
      onMouseDown={closeModal}
    >
      <div
        className="contact-modal-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="contact-modal-header">
          <p className="contact-modal-kicker">Direct note</p>
          <button
            type="button"
            className="contact-modal-close"
            aria-label="Close contact form"
            onClick={closeModal}
          >
            Close
          </button>
        </div>

        <h2 id="contact-modal-title">Send Desi a message!</h2>

        <form className="contact-modal-form" onSubmit={submitForm}>
          <label>
            <span>Name:</span>
            <input
              ref={nameInputRef}
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={updateField("name")}
              required
            />
          </label>

          <label>
            <span>Email:</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={updateField("email")}
              required
            />
          </label>

          <label>
            <span>Subject:</span>
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={updateField("subject")}
              required
            />
          </label>

          <label>
            <span>Message:</span>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={updateField("message")}
              required
            />
          </label>

          <button type="submit" className="contact-modal-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
