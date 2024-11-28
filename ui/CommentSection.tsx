"use client";

// components/CommentSection.tsx
import { useState } from 'react';
import { Box, VStack, Textarea, Button, Text, Heading } from '@chakra-ui/react';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const submitComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment('');
    }
  };

  return (
    <Box mt={8}>
      <Heading fontSize="lg" mb={4}>Comments</Heading>
      <VStack spacing={4} align="stretch">
        {comments.map((comment, index) => (
          <Text key={index} p={2} bg="gray.100" borderRadius="md">{comment}</Text>
        ))}
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <Button onClick={submitComment} colorScheme="teal">Submit</Button>
      </VStack>
    </Box>
  );
};

export default CommentSection;
