import { Button } from "./Button";
import "./Newsletter.css";
import useTitleId from "./hooks/useTitleId";

export function Newsletter({ title, sectionName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const titleId = useTitleId(title);

  return (
    <section className="newsletter" id={sectionName} aria-labelledby={titleId}>
      <h2 className="newsletter-title" id={titleId}>
        {title}
      </h2>
      <form className="newsletter-form" action="#" onSubmit={handleSubmit}>
        <input
          className="newsletter-input"
          name="email"
          type="email"
          placeholder="john@doe.com..."
          autoComplete="email"
        />
        <Button>Subscribe</Button>
      </form>
    </section>
  );
}
