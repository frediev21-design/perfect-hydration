"use client";

import { ApplicationIconCard } from "@/features/landing/components/applications/application-icon-card";
import { productApplications } from "@/lib/config/applications";

export function ApplicationsGrid() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
      {productApplications.map((application, index) => (
        <ApplicationIconCard
          key={application.id}
          title={application.title}
          description={application.description}
          icon={application.icon}
          index={index}
        />
      ))}
    </div>
  );
}
