import React, { useRef, useEffect, useState } from "react";

type LandingContainerProps = {
  onJsonDropped: (json: Map<string, any>) => void;
};

const LandingContainer: React.FC<LandingContainerProps> = ({
  onJsonDropped,
}) => {
  const dropzoneRef = useRef<HTMLDivElement | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // executed when file is ddropped
  const handleFileUpload = (file: File) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      let json = JSON.parse(reader.result as string) as Map<string, any>;
      onJsonDropped(json);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    const dropzone = dropzoneRef.current;
    if (!dropzone) return;

    const preventDefaults = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const highlight = () => setIsHighlighted(true);
    const unhighlight = () => setIsHighlighted(false);

    const handleDrop = (e: DragEvent) => {
      unhighlight();
      let files = e.dataTransfer!.files;
      if (files.length > 0) {
        if (
          files[0].name.endsWith(".json") ||
          files[0].name.endsWith(".JSON")
        ) {
          return handleFileUpload(files[0]);
        }
      }
    };

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropzone.addEventListener(eventName, highlight, false);
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dropzone.addEventListener(eventName, unhighlight, false);
    });

    dropzone.addEventListener("drop", handleDrop, false);

    // Cleanup function to remove all the event listeners when the component unmounts
    return () => {
      ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        dropzone.removeEventListener(eventName, preventDefaults, false);
      });

      ["dragenter", "dragover"].forEach((eventName) => {
        dropzone.removeEventListener(eventName, highlight, false);
      });

      ["dragleave", "drop"].forEach((eventName) => {
        dropzone.removeEventListener(eventName, unhighlight, false);
      });

      dropzone.removeEventListener("drop", handleDrop, false);
    };
  }, []); // Pass an empty array to run this effect only once when the component mounts

  return (
    <div id="landing-container" className="center-flex">
      <div className="landing-title">TikTok Wrapped!</div>
      <div
        id="drop-zone"
        ref={dropzoneRef}
        className={`center-flex drop-zone ${
          isHighlighted ? "highlighted" : ""
        }`}
      >
        <p>
          {isHighlighted ? "Drop to upload " : "Drag your data "}
          <i> {isHighlighted ? "" : "here"}</i>
        </p>

        {/* Drag and drop your file here, or click to select a file */}
      </div>
    </div>
  );
};

export default LandingContainer;
