import { Navigate, useParams } from "react-router-dom";

import Contact from "../components/Contact";
import { projects } from "../data/projects";
import { requestAccess } from "../lib";
import { DetailHero, Stats, Section, Prose, FeatureGrid, Numbered, Pills, NextUp } from "./parts";

const ProjectPage = () => {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return <Navigate to="/" replace />;
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const home = p.group === "side" ? "side" : "work";

  const actions = [
    ...(p.repo ? [{ label: "Request code access", href: requestAccess(p.name, p.repo) }] : []),
    ...p.links.map((l) => ({ label: l.label, href: l.href })),
  ];

  return (
    <article>
      <DetailHero
        video={p.video}
        back={{ to: "/", state: { scrollTo: home }, label: home === "side" ? "Side projects" : "All work" }}
        meta={`${p.meta} · ${p.context}`}
        title={p.title}
        summary={p.summary}
        actions={actions}
      />
      <Stats stats={p.stats} />
      {p.problem.length > 0 && (
        <Section label="The problem">
          <Prose paras={p.problem} />
        </Section>
      )}
      {p.built.length > 0 && (
        <Section label="What I built" title="wh<b>a</b>t it does" dark>
          <FeatureGrid items={p.built} />
        </Section>
      )}
      {p.decisions.length > 0 && (
        <Section label="Judgement calls" title="the c<b>a</b>lls that mattered">
          <Numbered items={p.decisions} />
        </Section>
      )}
      {(p.outcomes.length > 0 || p.stack.length > 0) && (
        <Section label="Outcomes" title="what ch<b>a</b>nged" dark>
          {p.outcomes.length > 0 && (
            <ul className="mb-12 max-w-3xl space-y-4">
              {p.outcomes.map((o) => (
                <li key={o} className="relative pl-6 font-general text-lg leading-relaxed text-blue-50/90">
                  <span className="absolute left-0 top-3 h-0.5 w-3 bg-yellow-300" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          )}
          {p.stack.length > 0 && (
            <>
              <p className="mb-4 font-general text-xs uppercase tracking-wider text-yellow-300">Built with</p>
              <Pills items={p.stack} dark />
            </>
          )}
        </Section>
      )}
      <NextUp to={`/work/${next.slug}`} eyebrow="Next project" title={next.title} video={next.video} />
      <Contact />
    </article>
  );
};

export default ProjectPage;
