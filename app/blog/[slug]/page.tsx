"use client";
// pages/blog/[slug].tsx
import { useParams } from "next/navigation";
import {
  Box,
  Heading,
  Text,
  Image,
  Spinner,
  VStack,
  Divider,
} from "@chakra-ui/react";
import CommentSection from "@/ui/CommentSection";

const dummyPosts = [
  {
    id: 1,
    title: "Car Wash Tips",
    content: "Detailed car wash tips...",
    imageUrl: "/img1.jpg",
    slug: "car-wash-tips",
  },
  {
    id: 2,
    title: "Interior Cleaning",
    content: "Detailed interior cleaning guide...",
    imageUrl: "/img2.jpg",
    slug: "interior-cleaning",
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = dummyPosts.find((p) => p.slug === slug);

  if (!post) return <Spinner size="xl" />;

  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Image src={post.imageUrl} alt={post.title} borderRadius="lg" mb={6} />
      <Heading mb={4}>{post.title}</Heading>
      <Text>{post.content}</Text>
      {/* Comment Section */}
      <Divider my={6} />
      <CommentSection />
    </Box>
  );
};

export default BlogPostPage;
