import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Body from "../pages/Day63/Bodycomp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/day63" element={<Body />} />
    </Routes>
  );
};

export default Router;
