// import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from "react";
import {render, screen, setupTests} from './test-utils'

test('renders action header', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Hello world/i);
    expect(linkElement).toBeInTheDocument();
});
