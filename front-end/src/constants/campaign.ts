export const CAMPAIGN_TITLE = "Technology for Good";
export const CAMPAIGN_SUBTITLE =
  "Rural Internet Access and Digital Literacy Program";

export const CAMPAIGN_GOAL_USD = 100000;
export const CAMPAIGN_DURATION_DAYS = 90; // campaign length in days
export const CAMPAIGN_BENEFICIARY = "Community Schools & Local NGOs";

// Theme colors (used by components and CSS variables)
export const THEME_COLORS = {
  techBlue: "#0A57A4",
  techGreen: "#2AC77D",
};

// Campaign-specific metadata for UI integrations
export const CAMPAIGN_METADATA = {
  coverageMap: {
    enabled: true,
    defaultZoom: 6,
    tileProvider: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  speedTest: {
    enabled: true,
    provider: "fast.com", // informational reference; implement as needed
  },
  courseTracker: {
    enabled: true,
    courses: [
      { id: "digital-basics", title: "Digital Basics" },
      { id: "online-safety", title: "Online Safety & Privacy" },
      { id: "edu-tools", title: "Education Tools & Resources" },
    ],
  },
  mentorMatching: {
    enabled: true,
    provider: "local-npo-roster", // placeholder for integration
  },
};
