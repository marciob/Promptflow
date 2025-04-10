"use client";

import { useState } from "react";
import { Hero } from "./components/Hero";
import { FilterSection } from "./components/FilterSection";
import { CopyButton } from "./components/CopyButton";
import { tips } from "./data/tips";
import {
  iosGuidelines,
  colorGuidelines,
  writingGuidelines,
  chartingGuidelines,
  collaborationGuidelines,
} from "./data/apple";

// Helper function to create a URL-friendly id
const createId = (title: string) => {
  const id = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
  console.log("Generated id for:", title, "->", id);
  return id;
};

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tagFilters = [
    "UI Design",
    "UX Design",
    "iOS",
    "Display",
    "Accessibility",
    "Ergonomics",
    "Interaction",
    "Gestures",
    "Input",
    "Multitasking",
    "System Features",
    "Integration",
    "Best Practices",
    "Color",
    "Design System",
    "RGB Values",
    "Dark Mode",
    "UX Writing",
    "Plain Language",
    "Error Messages",
    "Text Fields",
    "Inclusive Design",
    "Mobile UX",
    "Apple Guidelines",
    "Data Visualization",
    "Charts",
    "Data Display",
    "User Interface",
    "Sharing",
    "Collaboration",
    "Share Sheet",
    "CloudKit",
    "Universal Links",
    "System Integration",
    "SwiftUI",
  ];

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const allContent = [
    ...tips,
    ...iosGuidelines,
    ...colorGuidelines,
    ...writingGuidelines,
    ...chartingGuidelines,
    ...collaborationGuidelines,
  ];
  const filteredContent = selectedTag
    ? allContent.filter((item) => item.tags?.includes(selectedTag))
    : allContent;

  return (
    <div className="space-y-12">
      <Hero />

      <FilterSection
        tagFilters={tagFilters}
        selectedTag={selectedTag}
        onTagSelect={handleTagSelect}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item, index) => {
          const id = createId(item.title);
          console.log(
            "Generating URL for:",
            item.title,
            "->",
            `/content/${id}`
          );
          return (
            <a
              key={`content-${index}`}
              href={`/content/${id}`}
              className="card hover:border-gray-600 transition-colors hover:bg-gray-800/30 cursor-pointer block"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>

              {item.prompt && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">
                    Preview:
                  </h4>
                  <div className="bg-gray-800/50 p-4 rounded-md">
                    <p className="text-sm text-gray-300 line-clamp-2 after:content-['...'] after:ml-1">
                      {item.prompt.split("\n")[0]}
                    </p>
                  </div>
                </div>
              )}

              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
