import useTitleId from "./hooks/useTitleId";
import "./Section.css";

export function Section({ title, id = "", children, className = "" }) {
  const titleId = useTitleId(title);

  return (
    <section className={`${className} section`} aria-labelledby={titleId} id={`section-${id}`}>
      <h2 className="section-title" id={titleId}>
        {title}
      </h2>
      {children}
    </section>
  );
}
