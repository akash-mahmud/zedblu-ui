"use client";

import React, { Fragment, useState } from "react";
import { mediaUrl } from "@/lib/axios";
import ModalVideos from "@/components/modal-video/ModalVideos";
import CommonCounter from "@/components/counter/CommonCounter";
import ProjectMasonryTwo from "@/components/project/ProjectMasonryTwo";
import ServiceCategory from "@/components/widget/ServiceCategory";
import WidgetForm from "@/components/form/WidgetForm";
import CaseSliderOne from "@/components/case-study/CaseSliderOne";
import type {
  Project,
  ProjectsPageContent,
  Service,
  StrapiMedia,
} from "@/types/strapi";

type DownloadItem = {
  label?: string;
  url?: string | null;
  file?: StrapiMedia;
};

type ProjectDetailsViewProps = {
  project: Project;
  page?: ProjectsPageContent | null;
  services?: Service[];
  relatedProjects?: Project[];
};

const formatDate = (value?: string | null) => {
  if (!value) return null;
  try {
    return new Date(value).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return value;
  }
};

const resolveDownloadHref = (item?: DownloadItem | null) => {
  if (item?.file?.url) return mediaUrl(item.file.url);
  if (item?.url) return item.url;
  return null;
};

const ProjectDetailsView = ({
  project,
  page,
  services = [],
  relatedProjects = [],
}: ProjectDetailsViewProps) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen((prev) => !prev);

  const intro = project.shortDescription || "";
  const body = project.bodyDescription || "";
  const challenge = project.challengeDescription || "";
  const challengeItems = Array.isArray(project.challengeItems)
    ? project.challengeItems
        .map((item) => (typeof item === "string" ? item : item?.text))
        .filter(Boolean)
    : [];
  const goals = project.goalsDescription || "";
  const solutions = project.solutionsDescription || "";
  const stats = (project.stats || []).map((item) => ({
    value: item.value ?? 0,
    suffix: item.suffix ?? "+",
    label: item.label || "",
  }));

  const bannerUrl =
    project.bannerImage?.url || project.featuredImage?.url || null;
  const banner = bannerUrl ? mediaUrl(bannerUrl) : null;
  const videoImageUrl = project.videoImage?.url || null;
  const videoImage = videoImageUrl ? mediaUrl(videoImageUrl) : null;

  const infoRowsLeft = [
    { label: "Client", value: project.clientName || project.company?.name },
    { label: "Start Date", value: formatDate(project.startDate) },
    { label: "Project Duration", value: project.duration },
    { label: "End Date", value: formatDate(project.completionDate) },
  ].filter((row) => row.value);

  const infoRowsRight = [
    { label: "Project type", value: project.projectType },
    { label: "Location", value: project.location },
    { label: "Employees", value: project.employees },
    { label: "Results", value: project.results },
  ].filter((row) => row.value);

  const downloads =
    (project.downloadButtons?.length ?? 0) > 0
      ? project.downloadButtons || []
      : page?.downloadButtons || [];

  const showRelated = page?.showRelatedProjects !== false;
  const showServices = page?.showServiceSidebar !== false && services.length > 0;

  return (
    <Fragment>
      {project.videoUrl ? (
        <ModalVideos
          isOpen={open}
          onClick={openModal}
          videoUrl={project.videoUrl}
        />
      ) : null}

      <section className="project-details-wrapper pt-145 pb-30 pt-lg-60 pb-lg-20">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="project-details-content-top mb-50">
                <h2 className="sect-title mb-20">{project.title}</h2>
                {intro ? <p className="text-white mb-35">{intro}</p> : null}
              </div>
              {(infoRowsLeft.length > 0 ||
                infoRowsRight.length > 0 ||
                project.tags ||
                banner) && (
                <div
                  className="project-info d-flex justify-content-end mb-60"
                  style={
                    banner
                      ? {
                          backgroundImage: `url(${banner})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }
                      : undefined
                  }
                >
                  <div className="info-box">
                    <h4 className="semi-title mb-20">
                      {page?.infoHeading || "Project Information"}
                    </h4>
                    <div className="box d-md-flex align-items-center">
                      {infoRowsLeft.length ? (
                        <ul className="list-none pe-5">
                          {infoRowsLeft.map((row) => (
                            <li key={row.label}>
                              <div className="info-list">
                                <span>{row.label}</span>
                                <h5>{row.value}</h5>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {infoRowsRight.length ? (
                        <ul className="list-none">
                          {infoRowsRight.map((row) => (
                            <li key={row.label}>
                              <div className="info-list">
                                <span>{row.label}</span>
                                <h5>{row.value}</h5>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    {project.tags ? (
                      <div className="info-list">
                        <span>Tag</span>
                        <h5>{project.tags}</h5>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-8">
              <div className="widget-left-section">
                {body ? <p className="text-white mb-55">{body}</p> : null}
                {(challenge || challengeItems.length > 0) && (
                  <>
                    <hr />
                    <h3 className="sect-title-two fw-bold mb-20 mt-55">
                      {page?.challengeHeading || "Challenge"}
                    </h3>
                    {challenge ? (
                      <p className="text-white mb-35">{challenge}</p>
                    ) : null}
                    {challengeItems.length ? (
                      <ul className="text-list list-none">
                        {challengeItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                )}
                {videoImage ? (
                  <div className="service-video d-md-flex mt-10">
                    <div className="service-single-video mb-30">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-100"
                        src={videoImage}
                        alt={project.title || "Project video"}
                      />
                      {project.videoUrl ? (
                        <button
                          type="button"
                          className="popup-video mb-30"
                          onClick={openModal}
                          aria-label="Play project video"
                        >
                          <i className="bi bi-play-fill" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                {(goals || stats.length > 0) && (
                  <>
                    <hr />
                    <h3 className="sect-title-two fw-bold mb-20 mt-55">
                      {page?.goalsHeading || "Project Goals"}
                    </h3>
                    {goals ? <p className="text-white">{goals}</p> : null}
                    {stats.length ? (
                      <div className="row gx-4 gx-xxl-5 mt-40">
                        {stats.map((stat, i) => (
                          <div
                            key={`${stat.label}-${i}`}
                            className="col-md-3 col-sm-6"
                            data-aos="fade-up"
                          >
                            <div className="counter-style-two boder-style mb-45">
                              <h3>
                                <span className="counter">
                                  <CommonCounter value={String(stat.value)} />
                                </span>
                                {stat.suffix || "+"}
                              </h3>
                              <p className="text-white mt-20">{stat.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
                {(solutions || (project.gallery && project.gallery.length > 0)) && (
                  <>
                    <hr className="mt-10 mb-55" />
                    <h3 className="sect-title-two fw-bold mb-20">
                      {page?.solutionsHeading || "Solutions"}
                    </h3>
                    {solutions ? (
                      <p className="text-white mb-40">{solutions}</p>
                    ) : null}
                    {project.gallery?.length ? (
                      <ProjectMasonryTwo images={project.gallery} />
                    ) : null}
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-right-section">
                {showServices ? <ServiceCategory services={services} /> : null}
                {downloads.length ? (
                  <div className="widget-file-download mt-60">
                    {downloads.map((item, i) => {
                      const href = resolveDownloadHref(item);
                      const label = item.label || `Download ${i + 1}`;
                      if (!href) {
                        return (
                          <button key={`${label}-${i}`} type="button">
                            {label}{" "}
                            <i className="bi bi-file-earmark-arrow-down" />
                          </button>
                        );
                      }
                      return (
                        <a
                          key={`${label}-${i}`}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {label}{" "}
                          <i className="bi bi-file-earmark-arrow-down" />
                        </a>
                      );
                    })}
                  </div>
                ) : null}
                <div className="widget-form mt-60">
                  <h3 className="widget-title mb-20">
                    {page?.contactWidgetTitle || "Contact Us"}
                  </h3>
                  {page?.contactWidgetDescription ? (
                    <p className="mb-40">{page.contactWidgetDescription}</p>
                  ) : null}
                  <WidgetForm serviceTitle={project.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showRelated && relatedProjects.length > 0 ? (
        <section className="latest-case-work slick-nav blog-slick-two pt-75 pb-150 pt-lg-65">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-1b"
            src="/assets/img/shape/star-3b.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-2b"
            src="/assets/img/shape/star-4b.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-3b d-none d-lg-inline-block"
            src="/assets/img/shape/star-2.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-4b"
            src="/assets/img/shape/star-5b.svg"
            alt=""
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title mb-55 text-md-start text-center">
                  <h3
                    className="sect-title mb-25"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    {page?.relatedProjectsHeading || "Related Projects"}
                  </h3>
                </div>
              </div>
            </div>
            <CaseSliderOne projects={relatedProjects} />
          </div>
        </section>
      ) : null}
    </Fragment>
  );
};

export default ProjectDetailsView;
