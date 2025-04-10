interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  variant: "contentType" | "tag";
}

export const FilterButton = ({
  label,
  isSelected,
  onClick,
  variant,
}: FilterButtonProps) => {
  const baseStyles = "transition-colors border border-gray-700 text-sm";
  const selectedStyles = "bg-gray-700 text-white";
  const unselectedStyles =
    "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white";

  const variantStyles = {
    contentType: "px-3 py-1.5 rounded-md font-medium",
    tag: "px-3 py-1.5 rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${
        isSelected ? selectedStyles : unselectedStyles
      } ${variantStyles[variant]}`}
    >
      {label}
    </button>
  );
};
