import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'
import profile from '../images/profile.png';

test("Text 1 renders to the screen", () => {
    render(<Home/>)
    expect(screen.getByText("HI THERE I'M")).toBeInTheDocument()
})

test("Text 2 renders to the screen", () => {
    render(<Home/>)
    expect(screen.getByText("JOSEPH SEARLE")).toBeInTheDocument()
})

test("Text 3 renders to the screen", () => {
    render(<Home/>)
    expect(screen.getByText("SOFTWARE DEVELOPER")).toBeInTheDocument()
})

test("Text 4 renders to the screen", () => {
    render(<Home/>)
    expect(screen.getByText("I’M A FIRST CLASS COMPUTER SCIENCE GRADUATE WITH SKILLS IN")).toBeInTheDocument()
})

test("Text 5 renders to the screen", () => {
    render(<Home/>)
    expect(screen.getByText("SOFTWARE DEVELOPMENT AND CLOUD COMPUTING")).toBeInTheDocument()
})

test("Github button renders successfully", () => {
    render(<Home/>)
    expect(screen.getByTestId("git-button")).toBeInTheDocument()
})

test("LinkedIn button renders successfully", () => {
    render(<Home/>)
    expect(screen.getByTestId("linkedin-button")).toBeInTheDocument()
})

test("Email button renders successfully", () => {
    render(<Home/>)
    expect(screen.getByTestId("email-button")).toBeInTheDocument()
})

test("Github button has the right link", () => {
    render(<Home/>)
    expect(screen.getByTestId("git-button").href).toContain("https://github.com/JosephSearle")
})

test("LinkedIn button has the right link", () => {
    render(<Home/>)
    expect(screen.getByTestId("linkedin-button").href).toContain("https://www.linkedin.com/in/josephwilliamsearle/")
})

test("Profile picture renders successfully", () => {
    render(<Home/>)
    expect(screen.getByAltText("profile").src).toContain(profile)
})