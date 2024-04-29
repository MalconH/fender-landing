import { Feed } from "./Feed";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Newsletter } from "./Newsletter";
import { ProductsDisplay } from "./ProductsDisplay";
import { Top } from "./Top";
import guitars from "./data/guitars.json";
import accesories from "./data/accesories.json";
import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <Top />
      <main>
        <Newsletter
          title="Subscribe to our Newsletter to receive the latest news"
          sectionName="newsletter"
        />
        <ProductsDisplay title="What's New?" sectionName="whats-new" products={guitars} />
        <Feed sectionName="fender-feed" />
        <ProductsDisplay title="Accesories!" sectionName="accesories" products={accesories} />
      </main>
      <Footer></Footer>
    </>
  );
}
