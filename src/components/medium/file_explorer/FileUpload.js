import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      setError("Only image files are allowed");
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setError("File size should be less than 2MB");
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      {error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}

      {file && (
        <div>
          <p>{file.name}</p>

          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            style={{ width: "120px", marginTop: "8px" }}
          />

          <div>
            <button onClick={handleRemove}>Remove</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
