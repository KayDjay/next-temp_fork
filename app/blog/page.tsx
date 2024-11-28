"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Facebook, Instagram, LucideIcon, Twitter } from "lucide-react"; // Using Lucide Icons

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  socialLinks?: { platform: string; url: string }[];
}

const socialIcons: { [key: string]: LucideIcon } = {
  Facebook,
  Twitter,
  Instagram,
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  date,
  socialLinks,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      h="full"
      // width={"full"}
      mx="auto"
      maxWidth={{ base: 400, md: "full" }}
      _hover={{ boxShadow: "xl" }}
      transition="0.3s"
      maxW="lg"
    >
      <Box position="relative" width="100%" height="200px">
        <Image
          src={imageUrl}
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Box p={5} h="full">
        <VStack
          align="start"
          justifyContent={"space-between"}
          spacing={3}
          h="full"
        >
          <Heading
            noOfLines={2}
            overflow="hidden"
            textOverflow="ellipsis"
            size="md"
          >
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.500" className="">
            {date}
          </Text>
          <Text noOfLines={3}>{description}</Text>
          {socialLinks && (
            <HStack spacing={4} h="100%">
              {socialLinks.map(({ platform, url }) => {
                const IconComponent = socialIcons[platform];
                return (
                  <Link key={platform} href={url} isExternal>
                    <Icon
                      as={IconComponent}
                      boxSize={6}
                      color="blue.400"
                      _hover={{ color: "blue.600" }}
                    />
                  </Link>
                );
              })}
            </HStack>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

const blogPosts = [
  {
    title:
      "5 Benefits of Mobile Car Wash Services That You Absolutely Need to Know About to Keep Your Car in Top Condition",
    description:
      "Discover how mobile car wash services save time, reduce hassle, and provide a superior clean.",
    imageUrl: "/img1.jpg",
    date: "March 15, 2024",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/example" },
      { platform: "Twitter", url: "https://twitter.com/example" },
    ],
  },
  {
    title: "How to Maintain Your Car's Shine ",
    description:
      "Tips and tricks for keeping your car looking brand new all year round.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quae nihil aut eveniet aspernatur ullam cupiditate laborum fugit accusantium porro, harum et ratione iste vitae blanditiis dolores reprehenderit adipisci vero quas repudiandae tempora molestiae hic sequi! Atque consequuntur ab impedit ipsum facere, sapiente amet quo aut enim totam magni nisi?",
    imageUrl: "/img2.jpg",
    date: "March 10, 2024",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/example" },
    ],
  },
  {
    title: "Top 10 Car Cleaning Products",
    description:
      "A comprehensive guide to the best car cleaning products available.",
    imageUrl: "/img3.jpg",
    date: "March 5, 2024",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/example" },
      { platform: "Twitter", url: "https://twitter.com/example" },
    ],
  },
  {
    title: "DIY Car Wash Tips",
    description:
      "Learn how to wash your car like a pro with these simple DIY tips.",
    imageUrl: "/img4.jpg",
    date: "March 1, 2024",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/example" },
    ],
  },
  {
    title: "The Importance of Regular Car Maintenance",
    description:
      "Understand why regular car maintenance is crucial for your vehicle's longevity.",
    imageUrl: "/img5.jpg",
    date: "February 25, 2024",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/example" },
    ],
  },
  {
    title: "How to Choose the Right Car Wash Service",
    description: "Tips for selecting the best car wash service for your needs.",
    imageUrl: "/img6.jpg",
    date: "February 20, 2024",
    socialLinks: [{ platform: "Twitter", url: "https://twitter.com/example" }],
  },
  {
    title: "Eco-Friendly Car Wash Solutions",
    description:
      "Explore eco-friendly car wash solutions that are good for your car and the environment.",
    imageUrl: "/img7.jpg",
    date: "February 15, 2024",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/example" },
    ],
  },
  {
    title: "The Best Car Wax for a Long-Lasting Shine",
    description:
      "Find out which car wax products provide the longest-lasting shine.",
    imageUrl: "/img8.jpg",
    date: "February 10, 2024",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/example" },
    ],
  },
  {
    title: "How to Remove Stubborn Stains from Your Car",
    description:
      "Learn effective methods for removing stubborn stains from your car's interior and exterior.",
    imageUrl: "/img9.jpg",
    date: "February 5, 2024",
    socialLinks: [{ platform: "Twitter", url: "https://twitter.com/example" }],
  },
  {
    title: "The Benefits of Ceramic Coating for Your Car",
    description:
      "Discover the advantages of applying a ceramic coating to your vehicle.",
    imageUrl: "/img10.jpg",
    date: "February 1, 2024",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/example" },
    ],
  },
  {
    title: "How to Protect Your Car's Paint",
    description: "Tips for protecting your car's paint from damage and wear.",
    imageUrl: "/img11.jpg",
    date: "January 25, 2024",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/example" },
    ],
  },
  {
    title: "The Best Car Detailing Services Near You",
    description:
      "Find out where to get the best car detailing services in your area.",
    imageUrl: "/img12.jpg",
    date: "January 20, 2024",
    socialLinks: [{ platform: "Twitter", url: "https://twitter.com/example" }],
  },
  {
    title: "How to Clean Your Car's Interior",
    description:
      "Step-by-step guide to cleaning your car's interior like a professional.",
    imageUrl: "/img13.jpg",
    date: "January 15, 2024",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/example" },
    ],
  },
  {
    title: "The Ultimate Car Wash Checklist",
    description:
      "Make sure you don't miss a spot with our ultimate car wash checklist.",
    imageUrl: "/img14.jpg",
    date: "January 10, 2024",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/example" },
    ],
  },
  {
    title: "How to Get Rid of Pet Hair in Your Car",
    description:
      "Effective techniques for removing pet hair from your car's upholstery.",
    imageUrl: "/img15.jpg",
    date: "January 5, 2024",
    socialLinks: [{ platform: "Twitter", url: "https://twitter.com/example" }],
  },
];

const BlogPage = () => {
  return (
    <Container py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="xl" color="blue.600">
          Our Blog
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Latest insights and tips from Car Care Mobile Car Wash.
        </Text>
        <SimpleGrid
          alignItems={"center"}
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 6, md: 8 }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              date={post.date}
              socialLinks={post.socialLinks}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default BlogPage;
