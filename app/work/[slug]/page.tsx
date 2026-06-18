import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkCaseTemplate from "@/components/WorkCaseTemplate";
import {
  getWorkCaseStudy,
  workItems,
  type WorkCaseStudy,
} from "@/components/site-data";
import { notFound } from "next/navigation";

type WorkDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

function getTemplateStudy(slug: string): WorkCaseStudy {
  const existingStudy = getWorkCaseStudy(slug);

  if (existingStudy) {
    return existingStudy;
  }

  const item = workItems.find((workItem) => workItem.slug === slug);

  if (!item) {
    notFound();
  }

  return {
    slug: item.slug,
    title: item.title,
    deck: item.text,
    heroImage: item.caseHeroImage,
    meta: [
      { label: "Role", value: item.role },
      { label: "Timeline", value: item.date },
      { label: "Location", value: item.roleType },
    ],
    intro: item.text,
    achievements: [],
    galleryImages: [],
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const study = getTemplateStudy(params.slug);
  const currentIndex = workItems.findIndex((item) => item.slug === params.slug);
  const previousItem = workItems[(currentIndex - 1 + workItems.length) % workItems.length];
  const nextItem = workItems[(currentIndex + 1) % workItems.length];

  return (
    <>
      <Navbar active="work" />
      <main>
        <WorkCaseTemplate
          study={study}
          previousHref={`/work/${previousItem.slug}`}
          nextHref={`/work/${nextItem.slug}`}
        />
      </main>
      <Footer />
    </>
  );
}
