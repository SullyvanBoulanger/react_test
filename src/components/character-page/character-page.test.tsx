import { render, screen } from "@testing-library/react";
import { mockCharacterList } from "../character-list/data/character-list.mock-data";
import { CharacterPageElement } from "./character-page";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: () => ({
      data: mockCharacterList[0],
    }),
}));

const renderCharacterPage = () => {
    render(<CharacterPageElement />);
}

it("should render a character", async () => {
    renderCharacterPage();

    expect(await screen.findByText("Character Page")).toBeInTheDocument();
    expect(screen.getByText(mockCharacterList[0].name)).toBeInTheDocument();
});