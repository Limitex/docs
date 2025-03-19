import React from "react";
import { PackagePlus } from "lucide-react";
import { event } from "nextjs-google-analytics";
import Button from "./button";

const VPMRepositoryLink = () => {
  const vccUrl = `vcc://vpm/addRepo?url=https://vpm.limitex.dev/index.json`;

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
