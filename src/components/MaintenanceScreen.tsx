"use client";

export default function MaintenanceScreen({
  message,
  siteName,
}: {
  message?: string | null;
  siteName?: string;
}) {
  return (
    <div className="main-page-wrapper">
      <div className="error-page pt-150 pb-150">
        <div className="container text-center">
          <h1 className="sect-title mb-30">{siteName || "Zedblu"}</h1>
          <p className="fs-24">
            {message || "We are currently under maintenance. Please check back soon."}
          </p>
        </div>
      </div>
    </div>
  );
}
