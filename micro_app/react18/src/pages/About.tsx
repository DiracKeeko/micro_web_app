import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const About: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [fundId, setFundId] = useState<string>("");

  useEffect(() => {
    const newFundId: string = searchParams.get("fundId") || "--";
    setFundId(newFundId);
  }, [searchParams]);
  return (
    <div>
      <h2>React About Page</h2>
      <p>This is the About Page!</p>
      <div>fundId: {fundId}</div>
    </div>
  );
};

export default About;
