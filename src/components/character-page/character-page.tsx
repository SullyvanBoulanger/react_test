import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { Character } from "../../models/character";

export function CharacterPageElement(): ReactElement {
	const data = useLoaderData();
	const character = data as Character;

	return (
		<div>
			<h1>Character Page</h1>
			<p>Name : {character.name}</p>
			<p>Height : {character.height}</p>
			<p>Mass : {character.mass}</p>
			<p>Films : 
				<ul>
					{character.films.map((film: string) => (
						<li key={film}>{film}</li>
					))}
				</ul>
			</p>
		</div>
	);
}