"use client";
import { Box, Text } from "@chakra-ui/react";

export default function CoverageMap({ area }: { area?: string }) {
  // Prototype: shows a placeholder map area and mock coverage stats.
  return (
    <Box className="coverage-map" aria-label="coverage-map">
      <Box p={4}>
        <Text fontWeight="bold">Coverage Map (prototype)</Text>
        <Text fontSize="sm" color="gray.600">Area: {area || "Region A"}</Text>
        <Box mt={3} style={{ height: 160 }}>
          {/* Replace with Leaflet/Mapbox integration for production */}
          <div style={{ width: "100%", height: "100%", background: "repeating-linear-gradient(45deg,#f3f4f6,#f3f4f6 10px,#e6eef7 10px,#e6eef7 20px)" }} />
        </Box>
      </Box>
    </Box>
  );
}
