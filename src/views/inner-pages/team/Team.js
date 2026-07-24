"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import ThemeMenuThree from "@/components/header/ThemeMenuThree";
import PageTitle from "@/components/page-title/PageTitle";
import TeamTwoA from "@/components/team/TeamTwoA";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterThree from "@/components/footer/FooterThree";
import { mediaUrl } from "@/lib/axios";

const Team = ({ team }) => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        <ThemeMenuThree />
        <PageTitle title="Team" />
        <section className="techy-team team-sec-two mt-0 pt-145 pb-145 pt-lg-55 pb-lg-60">
          <div className="container">
            {team?.length ? (
              <div className="row gx-4 gx-xxl-5">
                {team.map((member, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-40"
                    key={member.slug || member.documentId || index}
                  >
                    <div className="card-style-eleven text-center">
                      <div className="img-holder mb-20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mediaUrl(
                            member.profileImage?.url,
                            "/assets/img/team/team-7e.jpg",
                          )}
                          alt={member.name || "Team"}
                        />
                      </div>
                      <h4>
                        <Link href={`/team/${member.slug}`}>{member.name}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <TeamTwoA />
            )}
          </div>
        </section>
        <NewsletterTwo />
        <FooterThree />
      </div>
    </Fragment>
  );
};

export default Team;
