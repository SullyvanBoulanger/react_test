import * as React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { CharacterList } from "../character-list/character-list";
import { CharacterPageElement } from "../character-page/character-page";
import { ReactElement } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CharacterList />,
		loader: async () => fetch("http://localhost:8080/character")
	},
	{
		path: "/character/:id",
		element: <CharacterPageElement />,
		// @ts-ignore
		loader: async ({params}) => fetch("http://localhost:8080/character/" + params.id)
	}
]);

export function Router(): ReactElement {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>    
	);
}