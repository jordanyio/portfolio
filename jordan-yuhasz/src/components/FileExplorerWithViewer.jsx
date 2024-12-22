import React, { useState } from "react";
import "./FileExplorerWithViewer.css";

const FileExplorerWithViewer = ({ fileStructure, theme }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const renderFolderContents = (contents) => {
    return contents.map((item, index) => {
      if (item.type === "folder") {
        return (
          <div className="folder" key={index}>
            <div className="folder-name">{item.name}</div>
            {renderFolderContents(item.contents)}
          </div>
        );
      } else if (item.type === "file") {
        return (
          <div
            className={`file ${selectedFile?.name === item.name ? "selected" : ""}`}
            key={index}
            onClick={() => handleFileClick(item)}
          >
            {item.name}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div
      className="file-explorer-with-viewer"
      style={{
        background: theme.background,
        color: theme.text,
        borderColor: theme.primary,
      }}
    >
      <div
        className="file-explorer"
        style={{
          borderColor: theme.primary,
        }}
      >
        {fileStructure.map((folder, index) => (
          <div key={index}>
            <div className="folder-name">{folder.name}</div>
            {renderFolderContents(folder.contents)}
          </div>
        ))}
      </div>
      <div
        className="pdf-viewer"
        style={{
          borderColor: theme.primary,
          backgroundColor: theme.card,
          color: theme.text,
        }}
      >
        {selectedFile ? (
          <embed
            src={selectedFile.path}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          />
        ) : (
          <p>Select a file to preview</p>
        )}
      </div>
    </div>
  );
};

export default FileExplorerWithViewer;
