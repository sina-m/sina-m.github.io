import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <Link to="/">Home</Link> |{" "}
      <Link to="about">About</Link>
    </div>
  );
}
