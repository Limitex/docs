import React from "react";
import { useEffect, useState } from "react";
import { Cards } from "nextra/components";
import { PackagePlus } from "lucide-react";

const VPMRepositoryLink = () => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const vccUrl = `vcc://vpm/addRepo?url=${baseUrl}/vpm.json`;

  return (
    <Cards>
      <Cards.Card
        icon={<PackagePlus />}
        title="Add VCC Repositories"
        href={vccUrl}
      />
    </Cards>
  );
};

export default VPMRepositoryLink;
