import React from "react";
import Header from "./Header";

type LandingPageProps = {};

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <Header />
    </div>
  );
};
export default LandingPage;
