import Image from "next/image";

import PageIntro, {
  PageIntroDescription,
  PageIntroTitle,
} from "@/components/page-intro";
import ArticleList from "@/components/article-list";

const ARTICLES = [
  {
    id: 1,
    title: "Introducing Animaginary: High performance web animations",
    url: "/articles/introducing-animaginary",
    content:
      "When you're building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    date: "September 2, 2022",
  },
  {
    id: 2,
    title: "Rewriting the cosmOS kernel in Rust",
    url: "/articles/rewriting-the-cosmos-kernel-in-rust",
    content:
      "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it's been a while since I've seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    date: "July 14, 2022",
  },
  {
    id: 3,
    title: "The future of web development",
    url: "/articles/the-future-of-web-development",
    content:
      "I've been thinking a lot about the future of web development. I think it's going to be a lot different than it is now. I think we're going to see a lot more people using tools like Figma and Webflow to build websites, and I think we're going to see a lot more people using tools like Vercel and Netlify to deploy them.",
    date: "June 1, 2022",
  },
];

export default function Page() {
  return (
    <>
      <PageIntro>
        <PageIntroTitle>
          Writing on software design, company building, and the aerospace
          industry.
        </PageIntroTitle>
        <PageIntroDescription>
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </PageIntroDescription>
      </PageIntro>

      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <ArticleList articles={ARTICLES} />
        </div>
      </div>
    </>
  );
}
