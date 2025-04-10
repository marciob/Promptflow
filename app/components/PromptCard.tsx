interface PromptCardProps {
  title: string;
  description: string;
  tags: string[];
  example: string;
  difficulty: string;
}

export const PromptCard = ({
  title,
  description,
  tags,
  example,
  difficulty,
}: PromptCardProps) => {
  return (
    <div className="card hover:border-gray-600 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
          {difficulty}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="bg-gray-800/50 p-4 rounded-md">
        <p className="text-sm text-gray-400 italic">{example}</p>
      </div>
    </div>
  );
};
