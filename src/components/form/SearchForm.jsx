"use client";

import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/blog?q=${encodeURIComponent(q)}` : "/blog");
  };

  return (
    <Fragment>
      <form className="subscribe-form" action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="widget-btn" type="submit" aria-label="Search">
          <i className="bi bi-search" />
        </button>
      </form>
    </Fragment>
  );
};

export default SearchForm;
