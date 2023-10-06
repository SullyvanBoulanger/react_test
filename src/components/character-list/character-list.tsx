import { ReactElement, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Character } from '../../models/character';

export function CharacterList(): ReactElement {
	const data = useLoaderData();
	const characters = data as Character[];

	const [firstCharacter, setFirstCharacter] = useState<Character | null>(null);
	const [secondCharacter, setSecondCharacter] = useState<Character | null>(null);

	const selectCharacter = (character: Character) => {
		if (!firstCharacter) {
			setFirstCharacter(character);
		} else if (!secondCharacter) {
			setSecondCharacter(character);
		}
	}

	return (
		<div>
			<h1>Character List</h1>

			<ul>
				{
					characters.map((character: Character) => (
						<li key={character.id}>
							<input type="checkbox" onClick={() => selectCharacter(character)} />
							<NavLink to={"/character/" + character.id}>
								{character.name}
							</NavLink>
						</li>
				))}
			</ul>

			<div>
				<h2>Compare</h2>
				<div>
					{firstCharacter && firstCharacter.name}
				</div>
				<div>
					{secondCharacter && secondCharacter.name}
				</div>
			</div>

		</div>
	);
}