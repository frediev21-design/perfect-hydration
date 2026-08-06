"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ApplicationIconCard } from "@/features/landing/components/applications/application-icon-card";
import {
  applicationsSection,
  primaryApplications,
  secondaryApplications,
} from "@/lib/config/applications";
import { cn } from "@/lib/utils";

export function ApplicationsGrid() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-14">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
        {primaryApplications.map((application, index) => (
          <ApplicationIconCard
            key={application.id}
            title={application.title}
            description={application.description}
            icon={application.icon}
            index={index}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setShowMore((open) => !open)}
          aria-expanded={showMore}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-accent/30 hover:bg-brand-accent/10"
        >
          {applicationsSection.moreUsesLabel}
          <ChevronDown
            aria-hidden
            className={cn(
              "size-4 text-brand-accent transition-transform",
              showMore && "rotate-180",
            )}
          />
        </button>
      </div>

      {showMore ? (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 lg:gap-6">
          {secondaryApplications.map((application, index) => (
            <ApplicationIconCard
              key={application.id}
              title={application.title}
              description={application.description}
              icon={application.icon}
              index={index + primaryApplications.length}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
