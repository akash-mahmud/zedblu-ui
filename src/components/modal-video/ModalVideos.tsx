"use client";

import React, { Fragment } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { youtubeVideoId } from "@/lib/youtube";

type ModalVideosProps = {
  isOpen: boolean;
  onClick: () => void;
  videoUrl?: string | null;
  videoId?: string | null;
  fileUrl?: string | null;
};

export default function ModalVideos({
  isOpen,
  onClick,
  videoUrl,
  videoId,
  fileUrl,
}: ModalVideosProps) {
  const youtubeId =
    videoId || youtubeVideoId(videoUrl) || "Faow3SKIzq0";

  if (fileUrl) {
    if (!isOpen) return null;
    return (
      <Fragment>
        <div className="modal-video" onClick={onClick}>
          <div className="modal-video-body">
            <div
              className="modal-video-inner"
              onClick={(event) => event.stopPropagation()}
            >
              <video src={fileUrl} controls autoPlay style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={youtubeId}
        onClose={onClick}
      />
    </Fragment>
  );
}
