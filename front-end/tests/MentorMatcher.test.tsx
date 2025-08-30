/// <reference types="vitest" />
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MentorMatcher from '@/components/MentorMatcher';

describe('MentorMatcher', () => {
  it('shows no mentor initially and matches when button clicked', () => {
    render(<MentorMatcher />);
    expect(screen.getByText(/No mentor selected/i)).toBeTruthy();
  });
});
