import React from "react";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to our Application!</h1>
      </main>
    </div>
  );
};

export default Home;
