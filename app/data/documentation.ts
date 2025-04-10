export interface Documentation {
  title: string;
  description: string;
  template: string;
  useCase: string;
}

export const documentation: Documentation[] = [
  {
    title: "System Prompt Template",
    description: "Base template for setting up system-level instructions",
    template: `You are an expert [ROLE] with [YEARS] years of experience.
Your task is to [TASK].
Follow these guidelines:
- [GUIDELINE 1]
- [GUIDELINE 2]
- [GUIDELINE 3]

Format your response as:
[FORMAT INSTRUCTIONS]`,
    useCase: "Setting up initial context and behavior for AI assistants",
  },
  {
    title: "Chain of Thought Template",
    description: "Template for complex reasoning tasks",
    template: `Let's solve this problem step by step:

1. First, let's understand what we're trying to achieve:
   [GOAL]

2. Break down the problem into smaller parts:
   - [PART 1]
   - [PART 2]
   - [PART 3]

3. For each part, consider:
   - [CONSIDERATION 1]
   - [CONSIDERATION 2]

4. Combine the solutions:
   [SOLUTION APPROACH]`,
    useCase: "Complex problem-solving and analysis tasks",
  },
  {
    title: "Content Generation Template",
    description: "Template for creating various types of content",
    template: `Create a [CONTENT TYPE] about [TOPIC] with the following requirements:

Audience: [TARGET AUDIENCE]
Tone: [DESIRED TONE]
Length: [WORD COUNT]
Key Points:
- [POINT 1]
- [POINT 2]
- [POINT 3]

Include:
- [REQUIREMENT 1]
- [REQUIREMENT 2]`,
    useCase: "Generating blog posts, articles, and other content",
  },
  {
    title: "Code Review Template",
    description: "Template for reviewing and improving code",
    template: `Review the following code:

\`\`\`[LANGUAGE]
[CODE]
\`\`\`

Please analyze:
1. Code Structure:
   - [STRUCTURE POINT 1]
   - [STRUCTURE POINT 2]

2. Performance:
   - [PERFORMANCE POINT 1]
   - [PERFORMANCE POINT 2]

3. Best Practices:
   - [PRACTICE 1]
   - [PRACTICE 2]

4. Security:
   - [SECURITY POINT 1]
   - [SECURITY POINT 2]`,
    useCase: "Code review and improvement suggestions",
  },
];
