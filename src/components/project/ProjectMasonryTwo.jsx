"use client";

import React, { Fragment } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { mediaUrl } from "@/lib/axios";

const ProjectMasonryTwo = ({ images = [] }) => {
  const gallery = (images || [])
    .map((img) => mediaUrl(img?.url))
    .filter(Boolean);

  if (!gallery.length) return null;

  return (
    <Fragment>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gx-4 mb-30" gutter="30px">
          {gallery.map((src, i) => (
            <div className="grid-item" key={`${src}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-100" src={src} alt={`Solution ${i + 1}`} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Fragment>
  );
};

export default ProjectMasonryTwo;
