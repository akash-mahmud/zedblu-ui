"use client";

import React, { Fragment } from "react";
import { mediaUrl } from "@/lib/axios";
import SocialThree from "@/components/social/SocialThree";
import SkillTwo from "@/components/skill/SkillTwo";
import ToolsList from "@/components/Service/ToolsList";
import type { ServiceProvider } from "@/types/strapi";

const DEFAULT_BIO = `
<p class="text-white">Quickly integrate client-centered users through vertical data. Holisticly repurpose interactive expert after distinctive resources. Collaboratively engineer prospective imperatives with transparent technology. Phosfluorescently morph excellent materials. Quickly integrate client-centered users through vertical data. Holisticly repurpose interactive expertise after distinctive resources. Collaboratively engineer prospective imperatives with transparent technology. Phosfluorescently morph excellent materials for multifunctional collaboration and idea-sharing. Continually innovate maintainable e-commerce without future-proof relationships.</p>
<p class="text-white mt-25 mb-40">Quickly integrate client-centered users through vertical data. Holisticly repurpose interactive expert after distinctive resources. Collaboratively engineer prospective imperatives with transparent technology. Phosfluorescently morph excellent materials.</p>
`;

const DEFAULT_SKILLS_DESC =
  "Quickly integrate client-centered users through vertical data. Holisticly repurpose interactive expert after distinctive resources. Collaboratively engineer prospective imperatives with transparent technology. Phosfluorescently morph excellent materials.";

type TeamDetailsViewProps = {
  member: ServiceProvider;
};

const TeamDetailsView = ({ member }: TeamDetailsViewProps) => {
  const image = mediaUrl(
    member.profileImage?.url,
    "/assets/img/team/team-16f.jpg",
  );
  const roles =
    member.roles ||
    member.jobTitle ||
    "UX/UI Designer, Chemical Engineer, Youtuber, Life Style Blogger";

  return (
    <Fragment>
      <section className="team-details-wrapper pt-145 pb-100 pt-lg-60 pb-lg-20">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="team-details-content-top mb-60 d-lg-flex align-items-center justify-content-space-between">
                <div className="team-img pe-md-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={member.name || "Team member"} />
                </div>
                <div className="team-info ps-md-3 ps-xxl-5 pt-lg-5">
                  <h3 className="team-title mb-25">{member.name}</h3>
                  <p className="fs-20 text-white mb-40">{roles}</p>
                  <div className="d-md-flex justify-content-space-between">
                    <ul className="list-none pe-5 me-4">
                      <li>
                        <div className="info">
                          <div className="icon">
                            <i className="bi bi-briefcase" />
                          </div>
                          <div className="info-content">
                            <h5>Job Title</h5>
                            <p>{member.jobTitle || "Team Member"}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <div className="icon">
                            <i className="bi bi-telephone" />
                          </div>
                          <div className="info-content">
                            <h5>Phone</h5>
                            <p>{member.phone || "+00 365 9852 65"}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <div className="icon">
                            <i className="bi bi-envelope" />
                          </div>
                          <div className="info-content">
                            <h5>Email</h5>
                            <p>{member.email || "hello@zedblu.com"}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <div className="icon">
                            <i className="bi bi-clock" />
                          </div>
                          <div className="info-content">
                            <h5>Experiences</h5>
                            <p>{member.experience || "12+ Years"}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-none">
                      <li>
                        <div className="info">
                          <div className="icon">
                            <i className="bi bi-file-bar-graph" />
                          </div>
                          <div className="info-content">
                            <h5>Skill Level</h5>
                            <p>{member.skillLevel || "Pro Level"}</p>
                          </div>
                        </div>
                      </li>
                      <li className="pb-2">
                        <div className="info">
                          <div className="icon">
                            <i className="bi bi-translate" />
                          </div>
                          <div className="info-content">
                            <h5>Language</h5>
                            <p>{member.languages || "English"}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h4 className="social-title mb-20">Follow More:</h4>
                        <SocialThree links={member.socialLinks} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-12">
              <div className="widget-left-section">
                <h3 className="sect-title-two fw-bold mb-20">Biography</h3>
                {member.bio ? (
                  <div
                    className="team-bio text-white"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: DEFAULT_BIO }} />
                )}

                <SkillTwo items={member.skills} />

                <h3 className="sect-title-two fw-bold mb-20">Our Skills</h3>
                <p className="text-white">
                  {member.skillsDescription || DEFAULT_SKILLS_DESC}
                </p>
                <ToolsList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TeamDetailsView;
