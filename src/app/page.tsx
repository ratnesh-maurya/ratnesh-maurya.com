import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ratnesh Maurya",
  description: "Ratnesh Maurya's Portfolio showcasing his skills, projects, education, and experience in software engineering.",
};

export default function Home() {
  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center font-assistant">
      <h1 className="text-4xl font-bold text-center mb-4">Hi I am Ratnesh Maurya..</h1>
      <p className="text-lg text-center mb-1">I am  Software Developer  <Link href="https://www.linkedin.com/company/initializ"
        className="text-teal-700"
        target="_blank"
      >@initializ.ai</Link>.</p>
      <h2>Feel free to connect with me on <Link href="https://www.linkedin.com/in/ratnesh-maurya/"
        className="text-teal-700"
        target="_blank"
      >LinkedIn</Link>.</h2>
    </div>

  );
}