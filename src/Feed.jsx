import articles from "./data/articles.json";
import useTitleId from "./hooks/useTitleId";
import "./Feed.css";

export function Feed({ sectionName }) {
  const title = "Fender Feed";
  const titleId = useTitleId(title);

  return (
    <section className="feed" id={sectionName} aria-labelledby={titleId}>
      <h2 className="feed-title" id={titleId}>
        {title}
      </h2>
      <div className="feed-articles">
        {articles.map((article) => {
          return (
            <article className="feed-article" key={article.id}>
              <div className="article-description">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-caption">{article.caption}</p>
              </div>
              <img src={article.image} alt={article.title} className="article-img" loading="lazy" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
