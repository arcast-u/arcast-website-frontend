"use client";

import * as React from "react";
import { FeatureCard } from "./featureCard";

export const FeatureGrid: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-6" aria-label="Feature Overview">
      <FeatureCard
        title="Choose Your Plan"
        description="Pick the membership tier—Bronze, Silver, or Gold—that best suits your podcasting needs and budget."
        className="pt-72 pb-9 max-md:pt-24"
      />

      <FeatureCard
        title="Book Your Sessions"
        description="Enjoy priority booking and schedule your studio time through our easy online portal."
        imageUrl="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/863fe8725c2dfcbb4dfdb845bdd2d8a07313d83a0c56fdbf23657fd009bc130b?placeholderIfAbsent=true"
      />

      <FeatureCard
        title="Access Exclusive Perks"
        description="Unlock discounted add-ons, premium editing services, and member-only resources to enhance your podcast."
        imageUrl="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/810e05a9cf123db6515cc0a731f093683fed35006d7ee077231de314bb74280a?placeholderIfAbsent=true"
      />
    </section>
  );
};

export default FeatureGrid;
