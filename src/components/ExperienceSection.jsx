const experiences = [
  {
    role: '[Role Title]',
    company: '[Company / Organization]',
    period: '[Month Year - Month Year]',
    summary:
      'Add 1-2 lines about what you built, owned, or improved in this role.',
  },
  {
    role: '[Role Title]',
    company: '[Company / Organization]',
    period: '[Month Year - Present]',
    summary:
      'Add impact details here, such as outcomes, metrics, or technologies used.',
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 rounded-2xl border border-[#AEC5EB] bg-[#F9DEC9] p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#3A405A]">Experience</h2>
          <p className="mt-2 text-[#685044]">Use this section to highlight internships, leadership, or research experience.</p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-lg bg-[#3A405A] px-5 py-2.5 text-sm font-medium text-[#F9DEC9] transition hover:bg-[#685044]"
        >
          Download Resume (PDF)
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.company}`} className="rounded-xl border border-[#E9AFA3] bg-[#F9DEC9] p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-[#685044]">{experience.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-[#3A405A]">{experience.role}</h3>
            <p className="text-sm text-[#685044]">{experience.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#685044]">{experience.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
