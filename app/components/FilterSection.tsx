import { useState } from "react";
import { FilterButton } from "./FilterButton";

interface FilterSectionProps {
  contentTypeFilters?: string[];
  tagFilters: string[];
  selectedContentType?: string | null;
  selectedTag: string | null;
  onContentTypeSelect?: (type: string) => void;
  onTagSelect: (tag: string) => void;
}

export const FilterSection = ({
  contentTypeFilters,
  tagFilters,
  selectedContentType,
  selectedTag,
  onContentTypeSelect,
  onTagSelect,
}: FilterSectionProps) => {
  return (
    <div className="space-y-6">
      {contentTypeFilters && contentTypeFilters.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-3">
            Content Type
          </h3>
          <div className="flex flex-wrap gap-2">
            {contentTypeFilters.map((type) => (
              <button
                key={type}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedContentType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                }`}
                onClick={() => onContentTypeSelect?.(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm font-medium text-gray-300 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tagFilters.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
              }`}
              onClick={() => onTagSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
