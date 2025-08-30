/// <reference types="vitest" />
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CampaignCard from '@/components/CampaignCard';

describe('CampaignCard', () => {
  it('renders title and progress', () => {
    render(<CampaignCard title="Test Campaign" progress={42} />);
    expect(screen.getByText('Test Campaign')).toBeTruthy();
    expect(screen.getByText('42% funded')).toBeTruthy();
  });
});
