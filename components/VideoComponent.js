import React from "react";

export default function VideoComponent({ videoUrl }) {
  return (
    <div
      className="max-w-4xl mx-auto"
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: "0",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
        width="520"
        height="325"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
