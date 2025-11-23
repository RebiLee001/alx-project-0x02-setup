import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </main>
    </div>
  );
};

export default About;
