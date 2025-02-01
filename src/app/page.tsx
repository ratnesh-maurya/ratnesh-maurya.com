import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ratnesh Maurya",
  description: "Ratnesh Maurya's Portfolio showcasing his skills, projects, education, and experience in software engineering.",
};
export default function Home() {
  return (
    < div className=" max-w-3xl  mx-auto min-h-screen px-2 " >
    <div >
      <h1 className="text-3xl font-bold">Ratnesh Maurya</h1>
      <p className="text-lg">Software Engineer</p>
    </div>
    </div>
 
  );
}