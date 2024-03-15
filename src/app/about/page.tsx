import PageIntro, {
  PageIntroDescription,
  PageIntroTitle,
} from "@/components/page-intro";

export default function Page() {
  return (
    <>
      <PageIntro>
        <PageIntroTitle>
          I’m Abraham Gebrekidan. I live somewhere in Addis Ababa, where I create
          the future.
        </PageIntroTitle>
        <PageIntroDescription>
          I’m a software engineer and a writer. I write about software,
          technology, and life.
        </PageIntroDescription>
      </PageIntro>
    </>
  );
}
