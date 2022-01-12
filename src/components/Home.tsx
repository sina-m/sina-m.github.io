import React from 'react';
import { Link } from "react-router-dom";


export function Home() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <Link to="/"><b>About</b></Link> | {" "}
        <Link to="/projects">Projects</Link>
      </nav>
      <p>
      ¯\_(ツ)_/¯
      </p>
    </div>
  );
}
