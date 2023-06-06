import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI Innovators Whitepaper",
    paragraph:
      "AI Innovators - Revolutionizing Artificial Intelligence through Accessibility, Customization, and Collaboration",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "AI Assisted",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["whitepaper"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Open Source AI",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Chat GPT",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
