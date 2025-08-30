"use client";
import React from 'react';
import { Box, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

const MOCK_MENTORS = [
  { id: 1, name: "Aisha K.", skills: ["digital-basics", "edu-tools"] },
  { id: 2, name: "Ravi P.", skills: ["online-safety", "digital-basics"] },
  { id: 3, name: "Maria S.", skills: ["edu-tools"] },
];

export default function MentorMatcher() {
  const [matched, setMatched] = useState<any | null>(null);

  const findMentor = (skill?: string) => {
    const mentor = MOCK_MENTORS.find((m) => m.skills.includes(skill || "digital-basics"));
    setMatched(mentor || null);
  };

  return (
    <Box className="literacy-course" p={4}>
      <Text fontWeight="bold">Mentor Matching (prototype)</Text>
      <Text fontSize="sm" color="gray.600">Find a mentor for course topics</Text>
      <VStack align="stretch" mt={3} spacing={3}>
        <HStack>
          <Button onClick={() => findMentor("digital-basics")}>Digital Basics</Button>
          <Button onClick={() => findMentor("online-safety")}>Online Safety</Button>
          <Button onClick={() => findMentor("edu-tools")}>Education Tools</Button>
        </HStack>
        {matched ? (
          <Box>
            <Text fontWeight="semibold">Matched Mentor</Text>
            <Text>{matched.name}</Text>
          </Box>
        ) : (
          <Text fontSize="sm" color="gray.600">No mentor selected</Text>
        )}
      </VStack>
    </Box>
  );
}
