import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggler from '../ThemeToggler.js';
import {ThemeProvider, useTheme} from "../../utilites/ThemeProvider";

const MockThemeToggler = () => {
	return(
		<ThemeProvider>
			<ThemeToggler />
		</ThemeProvider>
	)
}

describe("ThemeToggler", () => {

	test("should the hovered item have active class", () => {

		render(
			<MockThemeToggler />
		)

		const lightItem = screen.getByTestId("light");
		fireEvent.mouseEnter(lightItem);
		expect(lightItem).toHaveClass("active")

	})

	test("should move ball to the hovered item of theme", () => {

		render(
			<MockThemeToggler />
		)

		const lightItem = screen.getByTestId("light");
		const ball = screen.getByTestId("ball");
		fireEvent.mouseEnter(lightItem);
		expect(ball).toHaveStyle(`transform: translateX(0)`)

	})

	test("should the ball move back to default state where is depend on theme", () => {

		render(
			<MockThemeToggler />
		)

		const lightItem = screen.getByTestId("light");
		const ball = screen.getByTestId("ball");
		fireEvent.click(lightItem);
		expect(ball).toHaveStyle(`transform: translateX(0)`)

	})

	test("should the clicked item have active class", () => {

		render(
			<MockThemeToggler />
		)

		const lightItem = screen.getByTestId("light");
		fireEvent.click(lightItem);
		expect(lightItem).toHaveClass("active")

	})

})



