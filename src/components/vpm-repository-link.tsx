import React from "react";
import { useEffect, useState } from "react";
import { PackagePlus } from "lucide-react";
import { event } from "nextjs-google-analytics";
import Button from "./button";

const VPMRepositoryLink = () => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const vccUrl = `vcc://vpm/addRepo?url=${baseUrl}/vpm.json`;

  const handleClick = () => {
    event("click_vpm", {
      repo_url: vccUrl,
    });
  };

  return (
    <a
      href={vccUrl}
      onClick={handleClick}
    >
      <Button size="lg" className="w-full gap-4">
        <PackagePlus />
        <span className="hidden sm:inline">
          Add VCC Repositories
        </span>
      </Button>
    </a>
  );
};

export default VPMRepositoryLink;
