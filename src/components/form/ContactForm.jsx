"use client";

import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createInquiry } from "@/services/strapi";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .required("Email is Required")
    .email("Entered value does not match email format"),
  message: Yup.string().required("Please, leave us a message."),
});

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data) {
    setStatus("loading");
    setErrorMessage("");
    try {
      await createInquiry({
        name: data.name,
        email: data.email,
        message: data.message,
        source: "contact_form",
      });
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  }

  return (
    <Fragment>
      <form className="widget-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row gx-4 gx-xxl-5 px-0">
          <div className="col-md-6 mb-10">
            <div className="form-input-box">
              <label className="fs-16 text-white">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                {...register("name")}
                className={`${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
          </div>
          <div className="col-md-6 mb-10">
            <div className="form-input-box">
              <label className="fs-16 text-white">Email Id</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>
          <div className="col-md-12 mb-20">
            <div className="form-input-box">
              <label className="fs-16 text-white">Comments</label>
              <textarea
                placeholder="Write Message"
                {...register("message")}
                className={`${errors.message ? "is-invalid" : ""}`}
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <button
              className="theme_btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit Now"}
            </button>
            {status === "success" && (
              <p className="text-white mt-3 mb-0">Message sent successfully.</p>
            )}
            {status === "error" && (
              <p className="text-danger mt-3 mb-0">{errorMessage}</p>
            )}
          </div>
        </div>
      </form>
    </Fragment>
  );
}
