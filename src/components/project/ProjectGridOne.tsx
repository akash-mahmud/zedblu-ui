"use client";

import React, { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { mediaUrl } from "@/lib/axios";
import type { Project, ProjectCategory } from "@/types/strapi";

function tagList(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.flatMap((item) => tagList(item));
  if (typeof value === "string") {
    return value
      .split(/[,|/]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  if (typeof value === "object" && value && "text" in value) {
    return tagList((value as { text?: unknown }).text);
  }
  return [];
}

function matchesCategory(project: Project, category: ProjectCategory): boolean {
  if (category.showAllProjects) return true;

  const linked = project.filterCategories || [];
  if (linked.length) {
    return linked.some(
      (item) =>
        (category.documentId && item.documentId === category.documentId) ||
        (category.slug && item.slug === category.slug) ||
        (category.name &&
          item.name?.trim().toLowerCase() === category.name.trim().toLowerCase()),
    );
  }

  const needle = (category.name || category.slug || "").trim().toLowerCase();
  if (!needle) return false;
  return tagList(project.filterTags).some(
    (item) => item.trim().toLowerCase() === needle,
  );
}

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
  categories?: ProjectCategory[];
};

const ProjectGridOne = ({
  projects = [],
  categories = [],
}: ProjectGridOneProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = useMemo(
    () =>
      categories.filter((category) => Boolean(category?.name || category?.slug)),
    [categories],
  );

  const panels = useMemo(
    () => tabs.map((tab) => projects.filter((project) => matchesCategory(project, tab))),
    [projects, tabs],
  );

  if (!projects.length) {
    return (
      <p className="text-white text-center mb-40">
        No projects published in Strapi yet.
      </p>
    );
  }

  const grid = (items: Project[], extraClass = "") => (
    <div className={`${extraClass}row gx-4 gx-xxl-5 feature-slider pe-0`}>
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
  );

  if (!tabs.length) {
    return grid(projects);
  }

  return (
    <Fragment>
      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList className="row justify-content-center">
          <div className="col-xxl-10 text-center">
            <div className="portfolio-menu mb-40">
              {tabs.map((tab) => (
                <Tab key={tab.documentId || tab.slug || tab.name} className="gf_btn">
                  {tab.name || tab.slug}
                </Tab>
              ))}
            </div>
          </div>
        </TabList>
        {panels.map((items, panelIndex) => (
          <TabPanel key={tabs[panelIndex].documentId || tabs[panelIndex].slug || panelIndex}>
            {grid(items, panelIndex === 0 ? "" : "grid ")}
          </TabPanel>
        ))}
      </Tabs>
    </Fragment>
  );
};

export default ProjectGridOne;
