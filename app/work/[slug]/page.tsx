import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkCaseTemplate from "@/components/WorkCaseTemplate";
import {
  getWorkCaseStudy,
  workCaseStudies,
  workItems,
  workPageSlugOrder,
  type WorkCaseStudy,
} from "@/components/site-data";
import { notFound } from "next/navigation";

type WorkDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const slugs = new Set([
    ...workItems.map((item) => item.slug),
    ...workCaseStudies.map((study) => study.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
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
  // Cycles through every /work case page (Flagship, Current, Selected,
  // Foundations), not just the three in workItems: workPageSlugOrder is
  // the single source of truth for this order (components/site-data.ts).
  const currentIndex = workPageSlugOrder.indexOf(params.slug);
  const previousSlug =
    workPageSlugOrder[(currentIndex - 1 + workPageSlugOrder.length) % workPageSlugOrder.length];
  const nextSlug = workPageSlugOrder[(currentIndex + 1) % workPageSlugOrder.length];

  return (
    <>
      <Navbar active="work" />
      <main>
        <WorkCaseTemplate
          study={study}
          previousHref={`/work/${previousSlug}`}
          nextHref={`/work/${nextSlug}`}
        />
      </main>
      <Footer />
    </>
  );
}
