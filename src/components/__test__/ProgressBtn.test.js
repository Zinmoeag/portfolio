import { render, screen, fireEvent } from '@testing-library/react';
import ProgressBtn from '../ProgressBtn.js';

import {ThemeProvider, useTheme} from "../../utilites/ThemeProvider";


const MockBtn = ({to,text}) => {
  return (
      <ThemeProvider>
          <ProgressBtn to={to} text={text} /> 
      </ThemeProvider>
  )
}

describe("progress btn", () => {

  test('shouldnt render anything if user does nothing', () => {

    render(
      <MockBtn 
        to={"/project"} 
        text={"Enter"} 
      />
    );

    const stateElement = screen.getByText(/loading/i);
    expect(stateElement).not.toBeVisible();

  });

  test('should render loading text and animation after the user clicked', () => {

    render(
      <MockBtn 
        to={"/project"} 
        text={"Enter"} 
      />
    );
    
    const stateElement = screen.getByText(/loading/i);
    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    expect(stateElement).toBeVisible();
  });
})





