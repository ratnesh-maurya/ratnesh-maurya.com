const skills = [
  "Golang", "Elixir", "PostgreSQL", "Redis", "Docker", "Kubernetes",
  "TypeScript", "React", "Node.js", "AWS", "Git", "Linux",
  "Microservices", "REST APIs", "GraphQL", "MongoDB"
];

export default function Home() {
  return (
    <>
      <h1>Ratnesh Maurya</h1>
      <p>
        Hey, I am Ratnesh Maurya 🇮🇳, a passionate Software Development Engineer at{" "}
        <a
          href="https://www.linkedin.com/company/initializ/about/"
          target="_blank"
          rel="noopener"
        >
          Initializ
        </a>
        {" "}with 1.5 years of experience in backend development and cloud-native technologies.
      </p>

      <p>
        I specialize in building scalable backend systems using{" "}
        <strong>Golang</strong> and <strong>Elixir</strong>, with expertise in
        PostgreSQL, Redis, Docker, and Kubernetes. I am passionate about creating
        efficient, maintainable solutions that solve real-world problems.
      </p>

      <h2>🛠️ Skills & Technologies</h2>
      <div className="skills">
        <p className="skills-text">
          {skills.join(', ')}
        </p>
      </div>

      <h2>🚀 Featured Projects</h2>
      <p>
        Most of my work is open source and available on{" "}
        <a
          href="https://github.com/ratnesh-maurya"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        . Here are some of my notable projects:
      </p>

      <p>
        <strong>
          <a
            href="https://jsonic.ratnesh-maurya.com/"
            target="_blank"
            rel="noopener"
          >
            JSONic
          </a>
        </strong> - A lightweight and powerful utility designed to simplify working with JSON data.
      </p>

      <p>
        <strong>
          <a
            href="https://mdconverter.ratnesh-maurya.com/"
            target="_blank"
            rel="noopener"
          >
            MDConverter
          </a>
        </strong> - Instantly transform any text into beautiful markdown. Just paste and watch the magic happen.
      </p>

      <p>
        <strong>
          <a
            href="https://rehabify.ratnesh-maurya.com/"
            target="_blank"
            rel="noopener"
          >
            Rehabify
          </a>
        </strong> - The Path to a Brighter Tomorrow - A comprehensive platform for addiction recovery services.
      </p>

      <p>
        You can also check out my{" "}
        <a
          href="https://blog.ratnesh-maurya.com/blog/"
          target="_blank"
          rel="noopener"
        >
          technical blog
        </a>
        {" "}where I share insights about backend development, cloud technologies, and software engineering best practices.
      </p>

      <footer>
        <a
          href="https://github.com/ratnesh-maurya"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ratnesh-maurya"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/ratnesh_maurya_"
          target="_blank"
          rel="noopener"
        >
          X
        </a>
        <a
          href="https://ratnesh-maurya.com"
          target="_blank"
          rel="noopener"
        >
          Website
        </a>
      </footer>
    </>
  );
}