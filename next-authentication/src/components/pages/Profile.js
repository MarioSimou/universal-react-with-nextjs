import {useState} from '../App'

const Profile = () => {
	const {state:{user}} = useState()
	return (<p>{JSON.stringify(user,null,2)}</p>)
}

export default Profile