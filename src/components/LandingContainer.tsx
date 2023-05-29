import React, { useRef, useEffect, useState } from "react";

type LandingContainerProps = {
  onJsonDropped: (json: Map<string, any>) => void;
};

const validDataKeys = [
  "user",
  "join_date",
  "total_videos",
  "hours_scrolled",
  "times_opened_app",
];

const LandingContainer: React.FC<LandingContainerProps> = ({
  onJsonDropped,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dropzoneRef = useRef<HTMLDivElement | null>(null);
  const [validFile, setValidFile] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const dropzone = dropzoneRef.current;
    const fileInput = fileInputRef.current;
    if (!dropzone || !fileInput) return;

    const preventDefaults = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const highlight = () => setIsHighlighted(true);
    const unhighlight = () => setIsHighlighted(false);

    // executed when file is ddropped
    const handleFileUpload = (file: File) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        let json = JSON.parse(reader.result as string) as Map<string, any>;
        // validate data format
        if (validateFile(json)) {
          onJsonDropped(json);
        } else {
          setValidFile(false);
        }
      };
      reader.readAsText(file);
    };

    // handles when a file is dropped via click & drag
    const handleDrop = (e: DragEvent) => {
      unhighlight();
      let files = e.dataTransfer!.files;
      if (files.length > 0) {
        if (
          files[0].name.endsWith(".json") ||
          files[0].name.endsWith(".JSON")
        ) {
          return handleFileUpload(files[0]);
        } else {
          setValidFile(false);
        }
      }
    };

    // handles when a file is uploaded from file explorer
    const handleFileSelected = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        if (file.name.endsWith(".json") || file.name.endsWith(".JSON")) {
          handleFileUpload(file);
        }
      }
    };

    // checks if the json has all the keys required to process data
    const validateFile = (json: Map<string, any>) => {
      for (let key of validDataKeys) {
        if (!json.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    };

    const handleDropzoneClick = () => {
      fileInput.click();
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
    dropzone.addEventListener("click", handleDropzoneClick, false);
    fileInput.addEventListener("change", handleFileSelected, false);

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
      dropzone.removeEventListener("click", handleDropzoneClick, false);
      fileInput.removeEventListener("change", handleFileSelected, false);
    };
  }, [onJsonDropped]); // Pass an empty array to run this effect only once when the component mounts

  return (
    <div id="landing-container" className="center-flex">
      <div className="landing-title-container center-flex">
        <p>TikTok Wrapped</p>
        <p>TikTok Wrapped</p>
        <p>TikTok Wrapped</p>
        <p>TikTok Wrapped</p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".json"
      />
      <div
        id="drop-zone"
        ref={dropzoneRef}
        className={`center-flex drop-zone ${
          isHighlighted ? "highlighted" : ""
        }`}
      >
        <div className="center-flex drop-zone-text">
          {isHighlighted ? (
            <p>
              Drop your data <i>here</i>.
            </p>
          ) : (
            <>
              <p>Click to upload</p>
              <p>
                Or drag your data <i>here</i>.
              </p>
            </>
          )}
          <p>{validFile ? "" : "Invalid data format"}</p>
        </div>

        {/* Drag and drop your file here, or click to select a file */}
      </div>
    </div>
  );
};

export default LandingContainer;
