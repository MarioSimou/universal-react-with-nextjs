import Layout from './Layout'
import fetch from 'node-fetch'

const AppState = React.createContext({})
export const useState = ((useContext, context) => () => useContext(context))(React.useContext, AppState)

const App = ({Component, pageProps, title, user}) => {
	const [state, setState] = React.useState({user})
	console.log('state:', state)

	return (
		<AppState.Provider value={{state,setState}}>
			<Layout title={title}>
				<Component {...pageProps}/>
			</Layout>
		</AppState.Provider>
		)
}

App.getInitialProps = async ({Component: {name:title}, ctx: {req}}) => {
	if(req && req.signedCookies) {
		const {uid} = req.signedCookies
		const url = new URL(`users/${uid}`, process.env.USERS_API_DOMAIN)
		const user = await fetch(url).then(r => r.json())
		return {title, user}
	}
	return {title}
}

export default App