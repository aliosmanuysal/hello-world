"use client";
import React from 'react';
import { Box, Heading, Text, Progress, HStack, Image, Badge } from "@chakra-ui/react";
import { CAMPAIGN_TITLE, THEME_COLORS } from "@/constants/campaign";

export default function CampaignCard({
  title = CAMPAIGN_TITLE,
  subtitle,
  progress = 0,
}: {
  title?: string;
  subtitle?: string;
  progress?: number;
}) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} bg="white">
      <HStack align="start" spacing={4}>
        <Image src="/campaign/icon-connectivity.svg" boxSize="56px" alt="connectivity" />
        <Box flex="1">
          <Heading size="md">{title}</Heading>
          {subtitle ? <Text color="gray.600">{subtitle}</Text> : null}
          <Progress
            mt={3}
            value={progress}
            size="sm"
            sx={{
              "& > div": {
                background: `linear-gradient(90deg, ${THEME_COLORS.techBlue}, ${THEME_COLORS.techGreen})`,
              },
            }}
            borderRadius="full"
          />
          <HStack mt={2} spacing={3}>
            <Badge colorScheme="green">Connectivity</Badge>
            <Badge colorScheme="blue">Digital Literacy</Badge>
            <Text fontSize="sm" color="gray.600">{Math.round(progress)}% funded</Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
