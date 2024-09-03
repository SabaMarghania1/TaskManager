export const defaultGradients = [
  "bg-gradient-to-r from-red-400 via-pink-500 to-purple-500",
  "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
  "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500",
  "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
  "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
];

export const defaultTitles = [
  "Searching Inspirations For Upcoming Projects",
  "Make Mobile App Design",
  `Task #${Math.floor(Math.random() * 1000)}`,
];

export const defaultSubtitles = [
  "Attention: They Like Our Old Project",
  "",
  "Urgent: Client Meeting Tomorrow",
];

export const defaultTags = ["Design", "Research", "Planning", "Review"];

export const defaultContent = [
  "This is the first line of the default content.",
  "Here is the second line of content.",
  "Finally, this is the third line of default content.",
];

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomHeight = () => {
  const rand = Math.random();
  return rand < 0.2 ? getRandomNumber(152, 182) : getRandomNumber(183, 252);
};

export const getRandomWidth = () => {
  return getRandomNumber(172, 228);
};

export const getRandomContent = () => {
  return defaultContent[Math.floor(Math.random() * defaultContent.length)];
};

export const getRandomTitle = () => {
  return defaultTitles[Math.floor(Math.random() * defaultTitles.length)];
};

export const getRandomSubtitle = () => {
  return defaultSubtitles[Math.floor(Math.random() * defaultSubtitles.length)];
};

export const getRandomGradient = () => {
  return defaultGradients[Math.floor(Math.random() * defaultGradients.length)];
};

export const getRandomProgressBar = () => {
  const totalCircles = Math.floor(Math.random() * 25);
  const activeCircles = getRandomNumber(1, totalCircles);
  console.log(
    Array.from({ length: totalCircles }, (_, i) => i < activeCircles)
  );
  return Array.from({ length: totalCircles }, (_, i) => i < activeCircles);
};

getRandomProgressBar();
