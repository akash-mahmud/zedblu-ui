"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import type { Service } from "@/types/strapi";

type ServiceCategoryProps = {
  services?: Service[];
  currentSlug?: string;
};

const ServiceCategory = ({
  services = [],
  currentSlug,
}: ServiceCategoryProps) => {
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
