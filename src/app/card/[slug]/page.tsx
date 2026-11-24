import React, { cache } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  CANONICAL_LEGAL_ENTITY,
  fetchPublicCard,
  resolveSafeCardRedirect,
} from "@/lib/erm-cards";
import { DigitalBusinessCard } from "@/components/DigitalBusinessCard";

export const dynamic = "force-dynamic";

const getCard = cache((slug: string) => fetchPublicCard(slug));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCard(slug);

  if (data.found && data.card) {
    return {
      title: `${data.card.fullName} — ${CANONICAL_LEGAL_ENTITY}`,
      description: `${data.card.jobTitle} · ${CANONICAL_LEGAL_ENTITY}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${CANONICAL_LEGAL_ENTITY} — Digital Business Card`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function EmployeeCardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getCard(slug);

  const redirectTarget = resolveSafeCardRedirect(data);
  if (redirectTarget) {
    redirect(redirectTarget);
  }

  if (!data.found || !data.card) {
    redirect("/card");
  }

  return <DigitalBusinessCard mode="employee" card={data.card} />;
}
