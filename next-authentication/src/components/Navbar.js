import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-group">
				<div className="welcome">
					<h3>Welcome</h3>
					<span>username</span>
				</div>
			</div>
			<div className="nav-group">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/profile">
					<a>Profile</a>
				</Link>
				<Link href='/signin'>
					<a>Sign in</a>
				</Link>
				<button>Logout</button>
			</div>
			<style jsx>{`
				.navbar {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 1rem;
				}
				.navbar > .nav-group:last-child * {
					padding: 0.5rem;
					text-decoration: none;
					font-size: 1rem;
					color: blue;
				}
				.navbar > .nav-group:last-child *:hover {
					text-decoration: underline;
				}
				.navbar > .nav-group:last-child *:last-child {
					background-color: none;
					border: none;
				}
				.welcome {
					display: flex;
					align-items: center;
				}
				.welcome > h3 {
					margin-right: 0.5rem;
				}
			`}</style>
		</nav>
	)
}

export default Navbar