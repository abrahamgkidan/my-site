import PageIntro, {
  PageIntroDescription,
  PageIntroTitle,
} from "@/components/page-intro";
import ProjectList from "@/components/project-list";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    url: "planetaria.tech",
    image: "/vercel.svg",
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
  },
];

export default function Page() {
  return (
    <>
      <PageIntro>
        <PageIntroTitle>
          Things I’ve made trying to put my dent in the universe.
        </PageIntroTitle>
        <PageIntroDescription>
          Things I’ve made trying to put my dent in the universe.
        </PageIntroDescription>
      </PageIntro>
      <div className="mt-16 sm:mt-20">
        <ProjectList projects={[]} />
      </div>
    </>
  );
}
