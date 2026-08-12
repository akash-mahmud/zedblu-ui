"use client";

import React, { Fragment } from "react";
import Link from "next/link";

const ServiceCategory = ({ services = [], currentSlug }) => {
  return (
    <Fragment>
      <ul className="list-none service-widget">
        {services.map((service) => (
          <li key={service.slug || service.documentId}>
            <Link
              href={`/services/${service.slug}`}
              className={currentSlug === service.slug ? "active" : undefined}
            >
              {service.title}
              <span className="f-right">
                <i className="bi bi-arrow-right-short" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ServiceCategory;
