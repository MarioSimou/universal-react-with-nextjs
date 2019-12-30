import Navbar from './Navbar'

const Layout = ({children, title}) => {
	return (
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
	)
}

export default Layout