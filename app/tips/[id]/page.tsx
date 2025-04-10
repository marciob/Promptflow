"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { tips } from "../../data/tips";
import { CopyButton } from "../../components/CopyButton";

interface Params {
  id: string;
}

interface Props {
  params: Promise<Params>;
}

export default function TipDetail({ params }: Props) {
  const { id } = use(params);

  const tip = tips.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!tip) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{tip.title}</h1>
          <p className="text-gray-300 text-lg">{tip.description}</p>
        </div>

        {tip.prompt && (
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Prompt</h2>
              <CopyButton text={tip.prompt} />
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">
                {tip.prompt}
              </pre>
            </div>
          </div>
        )}

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
          <h2 className="text-xl font-semibold mb-4">Why it works</h2>
          <p className="text-gray-300">{tip.example}</p>
        </div>

        {tip.tags && (
          <div className="flex flex-wrap gap-2">
            {tip.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
