"use client";

import React, { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { mediaUrl } from "@/lib/axios";
import type { Project } from "@/types/strapi";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const href = project.slug ? `/projects/${project.slug}` : "/projects";
  const image = mediaUrl(project.featuredImage?.url);

  return (
    <div
      className="col-lg-4 col-md-4 col-sm-6"
      data-aos="fade-right"
      data-aos-delay={50 + (index % 3) * 50}
    >
      <div className="feature-item mb-40">
        <Link className="back-bg" href={href}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-100" src={image} alt={project.title || "Project"} />
        </Link>
        {project.category ? (
          <h5>
            <Link href={href}>{project.category}</Link>
          </h5>
        ) : null}
        <h3>
          <Link href={href}>{project.title}</Link>
        </h3>
      </div>
    </div>
  );
};

type ProjectGridOneProps = {
  projects?: Project[];
  filterTabs?: string[] | null;
};

const ProjectGridOne = ({
  projects = [],
  filterTabs,
}: ProjectGridOneProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = useMemo(() => {
    if (Array.isArray(filterTabs) && filterTabs.length > 0) {
      return filterTabs.map(String);
    }

    const fromCms = new Set<string>();
    projects.forEach((project) => {
      const tags = Array.isArray(project.filterTags) ? project.filterTags : [];
      tags.forEach((tag) => {
        if (tag) fromCms.add(String(tag));
      });
    });

    return ["All", ...[...fromCms].sort()];
  }, [filterTabs, projects]);

  const panels = useMemo(() => {
    return tabs.map((tab) => {
      if (tab === "All") return projects;
      return projects.filter((project) => {
        const tags = Array.isArray(project.filterTags) ? project.filterTags : [];
        return tags.includes(tab);
      });
    });
  }, [projects, tabs]);

  if (!projects.length) {
    return (
      <p className="text-white text-center mb-40">
        No projects published in Strapi yet.
      </p>
    );
  }

  return (
    <Fragment>
      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList className="row justify-content-center">
          <div className="col-xxl-10 text-center">
            <div className="portfolio-menu mb-40">
              {tabs.map((tab) => (
                <Tab key={tab} className="gf_btn">
                  {tab}
                </Tab>
              ))}
            </div>
          </div>
        </TabList>
        {panels.map((items, panelIndex) => (
          <TabPanel key={tabs[panelIndex]}>
            <div
              className={`${
                panelIndex === 0 ? "" : "grid "
              }row gx-4 gx-xxl-5 feature-slider pe-0`}
            >
              {items.length ? (
                items.map((project, i) => (
                  <ProjectCard
                    key={project.slug || project.documentId || i}
                    project={project}
                    index={i}
                  />
                ))
              ) : (
                <div className="col-12">
                  <p className="text-white text-center">
                    No projects in this category.
                  </p>
                </div>
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </Fragment>
  );
};

export default ProjectGridOne;
