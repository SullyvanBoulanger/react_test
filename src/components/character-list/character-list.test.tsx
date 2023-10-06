import { render, screen } from '@testing-library/react';
import { CharacterList } from './character-list';
import { mockCharacterList } from './data/character-list.mock-data';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLoaderData: () => mockCharacterList,
	useLocation: () => jest.fn()
}));

const renderCharacterList = () => {
	render(<CharacterList />);
}

it("should render a list of characters", async () => {
	renderCharacterList();

	expect(await screen.findByText("Character List")).toBeInTheDocument();
	expect(screen.getByText(mockCharacterList[0].name)).toBeInTheDocument();
}); 