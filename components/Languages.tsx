"use client";

const languages = [
  { name: "English", note: "native" },
  { name: "Arabic", note: "native" },
  { name: "French", note: "conversational" },
];

const Languages = () => {
  return (
    <section id="languages" className="flex flex-col gap-3">
      <h2 className="text-base font-medium text-black">Spoken Languages</h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((l) => (
          <span
            key={l.name}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700"
          >
            {l.name} <span className="text-neutral-400">({l.note})</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Languages;
