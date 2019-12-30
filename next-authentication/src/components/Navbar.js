import Link from 'next/link'
import {useState} from './App'
import {useRouter} from 'next/router'

const onClickLogout = ({router,setState}) => () => 
fetch('/api/v1/logout', {method: 'POST', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
.then(r => r.json())
.then(({success,message}) => {
	if(!success) return window.alert(message)
	setState({user: {}})
	router.push('/')
})
.catch(e => window.alert(r))

const Navbar = () => {
	const {state:{user}, setState} = useState()
	const router = useRouter()

	return (
		<nav className="navbar">
			<div className="nav-group">
				<div className="welcome">
					<h3>Welcome</h3>
					{user.id && <span>{user.username}</span>}
				</div>
			</div>
			<div className="nav-group">
				<Link href="/">
					<a>Home</a>
				</Link>
				{user.id && <Link href="/profile">
					<a>Profile</a>
				</Link>}
				{!user.id && <Link href='/signin'>
					<a>Sign in</a>
				</Link>}
				{user.id && <button onClick={onClickLogout({router,setState})}>Logout</button>}
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
				.navbar > .nav-group:last-child *:last-child:focus {
					outline: none;
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