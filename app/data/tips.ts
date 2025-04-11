export interface Tip {
  title: string;
  description: string;
  prompt?: string;
  tags?: string[];
  example?: string;
}

export const tips: Tip[] = [
  {
    title: "Maintain a Progress Log",
    description:
      "Create a systematic approach to track your AI coding journey and learn from past interactions",
    prompt:
      "Can you help me maintain a log file that tracks:\n1. Key findings and insights\n2. Changes we make to the codebase\n3. Our objectives and progress\n\nThis will help us avoid repeating mistakes and maintain a clear development roadmap.",
    tags: ["Technical", "Code", "Documentation", "Best Practices"],
  },
];
