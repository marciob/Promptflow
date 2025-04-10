interface DocumentationCardProps {
  title: string;
  description: string;
  template: string;
  useCase: string;
}

export const DocumentationCard = ({
  title,
  description,
  template,
  useCase,
}: DocumentationCardProps) => {
  return (
    <div className="card hover:border-gray-600 transition-colors">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="bg-gray-800/50 p-4 rounded-md mb-4">
        <pre className="text-sm text-gray-400 whitespace-pre-wrap font-mono">
          {template}
        </pre>
      </div>
      <div className="text-sm text-gray-400">
        <span className="font-medium">Use Case:</span> {useCase}
      </div>
    </div>
  );
};
