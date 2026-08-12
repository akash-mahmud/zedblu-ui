"use client";

import React, { Fragment, useState } from "react";
import { createInquiry } from "@/services/strapi";

const WidgetForm = ({ serviceTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const fullMessage = serviceTitle
        ? `[${serviceTitle}]\n\n${message}`
        : message;
      await createInquiry({
        name,
        email,
        message: fullMessage,
        source: "website",
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Failed to send message.");
    }
  };

  return (
    <Fragment>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Write Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          className="widget-btn mt-20"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Contact Now"}
        </button>
        {status === "success" ? (
          <p className="mt-15 mb-0 text-white">
            Thanks — we will get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-15 mb-0 text-danger">{error}</p>
        ) : null}
      </form>
    </Fragment>
  );
};

export default WidgetForm;
