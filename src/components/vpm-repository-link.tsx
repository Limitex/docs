import React from "react";
import { useEffect, useState } from "react";
import { PackagePlus } from "lucide-react";
import Button from "./button";

const VPMRepositoryLink = () => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const vccUrl = `vcc://vpm/addRepo?url=${baseUrl}/vpm.json`;

  return (
    <a href={vccUrl}>
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
