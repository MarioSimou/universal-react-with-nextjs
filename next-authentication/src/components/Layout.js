import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({children, title}) => {
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="app">
				<Navbar />
				<div className="main">
					{title && <h1>{title}</h1>}
					{children}
				</div>
			<style jsx>{`
				.main {
					padding-left: 0.5rem;
					padding-right: 0.5rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
				}
				.main h1 {
					margin-bottom: 2rem;
				}
			`}</style>
			</div>
		</React.Fragment>
	)
}

export default Layout