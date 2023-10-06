import { ReactElement } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Character } from '../../models/character';

export function CharacterList(): ReactElement {
	const data = useLoaderData();
	const characters = data as Character[];

	return (
		<div>
			<h1>Character List</h1>

			<ul>
				{
					characters.map((character: Character) => (
						<li key={character.id}>
							<NavLink to={"/character/" + character.id}>
								{character.name}
							</NavLink>
						</li>
				))}
			</ul>

		</div>
	);
}