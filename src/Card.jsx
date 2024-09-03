import React from "react";
import {
  getRandomTitle,
  getRandomSubtitle,
  defaultTags,
  getRandomHeight,
  getRandomWidth,
  getRandomContent,
  getRandomGradient,
  getRandomProgressBar,
} from "./utils/randoms";

const Card = ({
  title = getRandomTitle(),
  subtitle = getRandomSubtitle(),
  tags = defaultTags.slice(0, 2),
  content = getRandomContent(),
  gradientClass = getRandomGradient(),
  showProgressBar = true,
}) => {
  const randomHeight = `${getRandomHeight()}px`;
  const randomWidth = `${getRandomWidth()}px`;
  const progressBar = getRandomProgressBar();

  return (
    <div
      className={`p-4 m-2 rounded-lg shadow-lg hidden lg:block overflow-hidden ${gradientClass}`}
      style={{
        height: randomHeight,
        width: randomWidth,
      }}
    >
      <div className="mb-4">
        <div className="flex flex-wrap space-x-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="text-white text-lg font-semibold truncate">{title}</h3>
        {subtitle && (
          <h4 className="text-white text-sm font-light truncate">{subtitle}</h4>
        )}
      </div>
      <div className="text-white text-sm overflow-hidden text-ellipsis whitespace-nowrap">
        {content}
      </div>
      {showProgressBar && (
        <div className="mt-4 flex space-x-2">
          {progressBar.map((isActive, index) => (
            <div
              key={index}
              className={`min-h-2 min-w-2 rounded-full ${
                isActive ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
