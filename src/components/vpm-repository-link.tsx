import React from "react";
import { useEffect, useState } from "react";

const VPMRepositoryLink = () => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const vccUrl = `vcc://vpm/addRepo?url=${baseUrl}/vpm.json`;

  return (
    <a href={vccUrl} className="text-blue-600 underline hover:text-blue-800">
      Add VCC Repository
    </a>
  );
};

export default VPMRepositoryLink;
