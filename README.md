# Technology for Good — Project README

This repository is a customized fork of the Hiro Systems fundraising template (platform-template-fundraising-dapp) tailored for the "Technology for Good" campaign: a Rural Internet Access & Digital Literacy Program.

This README explains what was changed, where to edit campaign content, how to run the front-end locally, how to run unit tests, and how to use the provided testnet configuration for local testing or deployment with Clarinet.

## Summary of the campaign customization

- Campaign title: "Technology for Good"
- Campaign type: Rural Internet Access & Digital Literacy Program
- Funding goal: 100,000 USD
- Duration: 90 days
- Beneficiary: Community Schools & Local NGOs
- Theme: Tech blue / Tech green; connectivity and digital literacy imagery

## Files you will likely edit

- `front-end/src/constants/campaign.ts` — central place for campaign constants: `CAMPAIGN_TITLE`, `CAMPAIGN_SUBTITLE`, `CAMPAIGN_GOAL_USD`, `CAMPAIGN_DURATION_DAYS`, `CAMPAIGN_BENEFICIARY`, `THEME_COLORS`, and `CAMPAIGN_METADATA` for UI integrations (coverage map, speed test, course tracker, mentor matching).
- `front-end/public/campaign-details.md` — public campaign content (overview, funding breakdown, timeline, impact, team, why this matters). Edit Markdown here to change public copy.
- `front-end/public/campaign/` — campaign images and icons (hero graphic, icons). Add SVG/PNG/JPEG assets here.
- `front-end/src/components/*` — UI components customized for the campaign: `CampaignDetails.tsx`, `DonationModal.tsx`, `CampaignCard.tsx`, `CoverageMap.tsx` (prototype), and `MentorMatcher.tsx` (prototype). Keep Stacks transaction logic intact when editing.
- `front-end/src/theme.ts` and `front-end/src/app/globals.css` — Chakra theme tokens and CSS variables (tech blue/green and campaign-specific styles). Update colors and responsive rules here.

## Developer quickstart (front-end)

1. Open a terminal and install dependencies:

```bash
cd front-end
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Run unit tests:

```bash
npm run test
```

## Notes

- Chakra UI and related packages (Emotion, framer-motion) are required in the test environment. If you encounter peer dependency errors, try:

```bash
npm install --legacy-peer-deps
```

- The repository already contains a couple of component tests under `front-end/tests/` (e.g., `CampaignCard.test.tsx`, `MentorMatcher.test.tsx`).

## Testnet and Clarinet

- A `settings/Testnet.toml` file has been added to help run local test orchestration or pass configuration into Clarinet. It contains example ports and image placeholders for local orchestration and sample accounts for testing.

- Typical Clarinet commands you may use from the repository root or the `front-end` directory:

```bash
clarinet check
clarinet test
# clarinet deploy --config settings/Testnet.toml  # if your clarinet setup supports deploy with this config
```

## Security and deployment notes

- Do NOT use the example mnemonics or test accounts in `settings/Testnet.toml` on a public network. Replace them with secure keys for any public or production deployment.

- Keep all Clarity contract builders and transaction execution helpers intact when changing front-end code: they are located under `front-end/src/lib` and `front-end/src/hooks`.

## Recommended next steps

- Replace placeholder campaign assets in `front-end/public/campaign/` with final hero and icon graphics.
- Review `front-end/src/constants/campaign.ts` and update any localized copy or metadata required for external integrations (map provider keys, speed-test endpoints, mentor API endpoints).
- If you want, I can:

  - Generate a `docker-compose.yml` snippet to bring up local Stacks/Bitcoin test nodes that match `settings/Testnet.toml` ports.
  - Create a small Clarinet orchestration snippet or deploy script that uses `settings/Testnet.toml`.

## Where to get help

- If you'd like me to update specific files with the final campaign copy and assets, tell me which content (copy + images) to insert and I will apply the patches.
- If you want an orchestration (docker-compose + clarinet integration), say so and I will prepare it.

-- End of README --
# Technology for Good — Project README

This repository is a customized fork of the Hiro Systems fundraising template (platform-template-fundraising-dapp) tailored for the "Technology for Good" campaign: a Rural Internet Access & Digital Literacy Program.

This README explains what was changed, where to edit campaign content, how to run the front-end locally, how to run unit tests, and how to use the provided testnet configuration for local testing or deployment with Clarinet.

Summary of the campaign customization
- Campaign title: "Technology for Good"
- Campaign type: Rural Internet Access & Digital Literacy Program
- Funding goal: 100,000 USD
- Duration: 90 days
- Beneficiary: Community Schools & Local NGOs
- Theme: Tech blue / Tech green; connectivity and digital literacy imagery

Files you will likely edit
- `front-end/src/constants/campaign.ts` — central place for campaign constants: `CAMPAIGN_TITLE`, `CAMPAIGN_SUBTITLE`, `CAMPAIGN_GOAL_USD`, `CAMPAIGN_DURATION_DAYS`, `CAMPAIGN_BENEFICIARY`, `THEME_COLORS`, and `CAMPAIGN_METADATA` for UI integrations (coverage map, speed test, course tracker, mentor matching).
- `front-end/public/campaign-details.md` — public campaign content (overview, funding breakdown, timeline, impact, team, why this matters). Edit Markdown here to change public copy.
- `front-end/public/campaign/` — campaign images and icons (hero graphic, icons). Add SVG/PNG/JPEG assets here.
- `front-end/src/components/*` — UI components customized for the campaign: `CampaignDetails.tsx`, `DonationModal.tsx`, `CampaignCard.tsx`, `CoverageMap.tsx` (prototype), and `MentorMatcher.tsx` (prototype). Keep Stacks transaction logic intact when editing.
- `front-end/src/theme.ts` and `front-end/src/app/globals.css` — Chakra/Chakra theme tokens and CSS variables (tech blue/green and campaign-specific styles). Update colors and responsive rules here.

Developer quickstart (front-end)
1. Open a terminal and install dependencies:

```bash
cd front-end
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Run unit tests:

```bash
npm run test
```

Notes:
- Chakra UI and related packages (Emotion, framer-motion) are required in the test environment. If you encounter peer dependency errors, try:

```bash
npm install --legacy-peer-deps
```

- The repository already contains a couple of component tests under `front-end/tests/` (e.g., `CampaignCard.test.tsx`, `MentorMatcher.test.tsx`).

Testnet and Clarinet
- A `settings/Testnet.toml` file has been added to help run local test orchestration or pass configuration into Clarinet. It contains example ports and image placeholders for local orchestration and sample accounts for testing.
- Typical Clarinet commands you may use from the repository root or the `front-end` directory:

```bash
clarinet check
clarinet test
# clarinet deploy --config settings/Testnet.toml  # if your clarinet setup supports deploy with this config
```

Security and deployment notes
- Do NOT use the example mnemonics or test accounts in `settings/Testnet.toml` on a public network. Replace them with secure keys for any public or production deployment.
- Keep all Clarity contract builders and transaction execution helpers intact when changing front-end code: they are located under `front-end/src/lib` and `front-end/src/hooks`.

Recommended next steps
- Replace placeholder campaign assets in `front-end/public/campaign/` with final hero and icon graphics.
- Review `front-end/src/constants/campaign.ts` and update any localized copy or metadata required for external integrations (map provider keys, speed-test endpoints, mentor API endpoints).
- If you want, I can:
  - Generate a `docker-compose.yml` snippet to bring up local Stacks/Bitcoin test nodes that match `settings/Testnet.toml` ports.
  - Create a small Clarinet orchestration snippet or deploy script that uses `settings/Testnet.toml`.

Where to get help
- If you'd like me to update specific files with the final campaign copy and assets, tell me which content (copy + images) to insert and I will apply the patches.
- If you want an orchestration (docker-compose + clarinet integration), say so and I will prepare it.

-- End of README --
# Print Hello World in Clarity

The primary intent of this example is to demonstrate printing "Hello World" within a Clarity function. The example also demonstrates both read-only and public functions, simple handling of function parameters, and throwing an error within a function.

## Know your Contract

Review the [hello-world.clar](/examples/hello-world/contracts/hello-world.clar) contract.

You can interact with this sample by commenting/uncommenting respective functions, altering the behavior, and running them through Clarinet or unit tests.

To add a new contract, use [Clarinet](https://docs.hiro.so/stacks/clarinet).

## Test your Contract

- You can manually test your your contracts in the [Clarinet console](https://docs.hiro.so/clarinet/how-to-guides/how-to-test-contract#load-contracts-in-a-console).
- You can programmatically test your contracts with [unit tests](https://docs.hiro.so/clarinet/how-to-guides/how-to-test-contract).
