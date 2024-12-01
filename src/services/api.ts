import { PostResponse } from "./types";

const getRandomDate = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return date.toISOString().split("T")[0];
};

export const fetchPlaceholderAPI = async (): Promise<PostResponse> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  const posts = await response.json();

  const startDate = new Date(2002, 0, 1);
  const endDate = new Date();
  const finalPosts = posts.map((post: any) => ({
    ...post,
    date: getRandomDate(startDate, endDate),
  }));

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return finalPosts;
};
