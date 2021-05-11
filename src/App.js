import React, { useReducer } from 'react'
import './App.css';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';

const initialState = 0
const reducer = (state, action) => {
	switch(action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

function App() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider 
			value={{
				countState: count,
				countDispatch: dispatch
			}}
		>
			<div className="App">
				Count - {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CountContext.Provider>
	);
}

export default App;

// {/* <UserContext.Provider value={'Rick'}>
// 				<ChannelContext.Provider value={'Lykos'}>
// 					<ComponentC />
// 				</ChannelContext.Provider>
// 			</UserContext.Provider> */}