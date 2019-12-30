import {useState} from '../App'
import Link from 'next/link'
const Home = () => {
	const {state: {user}} = useState()

	return (
		<div>
			{user.id && <div>
				<p>Welcome</p>
				<p>
					<Link href="/profile">
						<a>Go to profile</a>
					</Link>
				</p>
				</div>}
		</div>
	)
}

export default Home