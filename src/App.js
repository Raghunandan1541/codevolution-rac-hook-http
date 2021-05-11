import React from 'react'
import './App.css';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			{/* <DataFetchingOne /> */}
			<DataFetchingTwo />
		</div>
	);
}

export default App;

// {/* <UserContext.Provider value={'Rick'}>
// 				<ChannelContext.Provider value={'Lykos'}>
// 					<ComponentC />
// 				</ChannelContext.Provider>
// 			</UserContext.Provider> */}