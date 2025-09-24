import type { TouristCardProps } from "../../types";

const TouristCard: React.FC<TouristCardProps> = ({ data, className = '' }) => {
  const getCardClasses = () => {
    const baseClasses = "relative overflow-hidden rounded-4xl bg-cover bg-center group cursor-pointer transition-transform duration-300 hover:scale-105 w-full";
    return `${baseClasses} h-48 sm:h-56 md:h-64 lg:h-72`;
  };

  return (
    <div
      className={`${getCardClasses()} ${className}`}
      style={{ backgroundImage: `url(${data.imageUrl})` }}
    >
      <div className="absolute top-5 inset-0 flex flex-col justify-end p-4 sm:p-6 text-white font-mulish">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">
          {data.title}
        </h3>

        <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {data.description}
        </p>
        {data.links && (
          <div className="mb-3 sm:mb-4">
            <p className="text-xs opacity-75 mb-1">À voir :

              {data.links.map((link, index) => (
                <span key={index}>
                  <a
                    href={link.url}
                    className="text-xs text-blue-300 hover:text-blue-200 underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.text}
                  </a>
                  {index < data.links!.length - 1 && (
                    <span className="text-xs opacity-75">, </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        )}

        {data.buttonText && (
          <button className="self-start text-white border border-white text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors duration-200 flex items-center gap-2">
            <span className="truncate">{data.buttonText}</span>
            <span
              className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border"
            >
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        )}

      </div>
    </div>
  );
};

export default TouristCard