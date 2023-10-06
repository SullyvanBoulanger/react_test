import { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

function App() {
	let [fetchedValue, setFetchedValue] = useState('Undefined');	

	const handleClick = async () => {  
		fetch('http://localhost:8080/test')
			.then(response => response.json())
			.then(data => alert(data.value))
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	useEffect(() => {
		fetch('http://localhost:8080/test')
			.then(response => response.json())
			.then(data => {
				setFetchedValue(data.value);
				return data;
			})
			.then(data => console.log(data))
			.catch(error => console.log(error));
	});

	return (
	<div className="App">
		<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			Edit <code>src/App.tsx</code> and save to reload.
		</p>
		<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
		<button onClick={handleClick}>
			Test Button
		</button>
		<p>
			Fetched Value : {fetchedValue}
		</p>
		</header>
	</div>
	);
}

export default App;
