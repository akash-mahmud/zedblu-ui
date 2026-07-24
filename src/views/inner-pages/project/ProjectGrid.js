"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import ThemeMenuThree from "@/components/header/ThemeMenuThree";
import PageTitle from "@/components/page-title/PageTitle";
import ProjectGridOne from "@/components/project/ProjectGridOne";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterThree from "@/components/footer/FooterThree";
import { mediaUrl } from "@/lib/axios";

const ProjectGrid = ({ projects }) => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        <ThemeMenuThree />
        <PageTitle title="Our Project" />
        <section className="techy-project-one pt-145 pb-105 pt-lg-55 pb-lg-15">
          <div className="container">
            {projects?.length ? (
              <div className="row gx-4 gx-xxl-5">
                {projects.map((project, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-40"
                    key={project.slug || project.documentId || index}
                  >
                    <div className="card-style-nine">
                      <div className="img-meta mb-20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mediaUrl(
                            project.featuredImage?.url,
                            "/assets/img/work/project-1.jpg",
                          )}
                          alt={project.title || "Project"}
                        />
                      </div>
                      <h4>
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h4>
                      <p>{project.company?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ProjectGridOne />
            )}
          </div>
        </section>
        <NewsletterTwo />
        <FooterThree />
      </div>
    </Fragment>
  );
};

export default ProjectGrid;
