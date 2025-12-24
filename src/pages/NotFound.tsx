import { Link } from "wouter";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>The page you are looking for does not exist.</h2>
      <Link href="/">Back to Home</Link>
    </div>
  );
};