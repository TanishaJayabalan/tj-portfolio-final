import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { createClient } from "@/prismicio";
import ContentBody from "@/components/ContentBody";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("project", uid).catch(() => notFound());
  return <ContentBody page={page}/>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("project", uid).catch(() => notFound());
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project");
  return pages.map((page) => ({ uid: page.uid }));
}

// Add revalidation
export const revalidate = 60; // Revalidate every 60 seconds
