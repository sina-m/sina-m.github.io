import React from 'react';
import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
    <h1>Aboot</h1>
    <nav>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About</Link>
    </nav>
    </div>
  );
}
