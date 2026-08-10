"use client";

const skills = [
  {
    category: "AI / LLMs",
    items: ["RLHF & Preference Data", "LLM Evaluation", "Rubric Design", "AI Agents", "Data Quality"],
  },
  {
    category: "Data & Operations",
    items: ["SQL", "Snowflake", "Redash", "Tableau", "Salesforce", "Linear"],
  },
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="flex flex-col gap-5">
      <h2 className="text-base font-medium text-black">Tech Stack</h2>
      <div className="flex flex-col gap-4">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2">
            <h3 className="text-sm text-neutral-400">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
