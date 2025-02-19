"use client";

import * as React from "react";
import { FeatureCard } from "./featureCard";


export const FeatureGrid: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-6" aria-label="Feature Overview">
      <FeatureCard
        title="Choose Your Plan"
        description="Pick the membership tier—Bronze, Silver, or Gold—that best suits your podcasting needs and budget."
        imageUrl="/icons/note.svg"
      />

      <FeatureCard
        title="Book Your Sessions"
        description="Enjoy priority booking and schedule your studio time through our easy online portal."
        imageUrl="/icons/12.svg"
      />

      <FeatureCard
        title="Access Exclusive Perks"
        description="Unlock discounted add-ons, premium editing services, and member-only resources to enhance your podcast."
        imageUrl="/icons/gift.svg"
      />
    </section>
  );
};

export default FeatureGrid;
