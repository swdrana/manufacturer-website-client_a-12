import React from "react";
import Header from "../components/Header/Header";
import b1 from './../img/human-use-computer-control-robot-arms-working-procuction-convoyed-smart-factory-industry-4_1150-43048.jpg'
import './Home.css'
const Home = () => {
  return (
    <div
      class="hero min-h-screen banner-bg"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="px-16">
          <h1 class="mb-5 text-5xl font-bold">NEED NEW TOOLS?</h1>
          <p class="mb-5">
          Electronics manufacturing software is a set of tools used by manufacturers to plan, execute, and report on the production of electronic goods. Common features include supply chain management, material supplier planning, recall management, and make/buy reporting, among others. By streamlining and automating routine processes, electronics manufacturing software helps manufacturers increase production while using fewer resources.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
