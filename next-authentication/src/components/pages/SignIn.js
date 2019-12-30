import Form from '../Form'
import {useRouter} from 'next/router'
import {useState} from '../App'

const defaultHeaders = {'Content-Type': 'application/json', 'Accept': 'application/json'}
const onSubmit = ({router,setState}) => values => 
fetch('/api/v1/login', {method: 'POST',headers: defaultHeaders, body: JSON.stringify(values)})
.then(r => r.json())
.then(({success, message, data:user}) => {
	if(!success) return window.alert(message)
	setState({user})
	router.push('/')
})
.catch(e => window.alert(e))

const SignIn = () => {
	const {setState} = useState()
	const router = useRouter()
	return (
			<Form fields={[
				[{name: "email"}, args => <input type="email" name="email" placeholder="Your email" autoComplete="email" {...args}/>],
				[{name: "password"}, args => <input type="password" name="password" placeholder="Your password" autoComplete="password" {...args}/>], 
			]}
				onSubmit={onSubmit({router,setState})}
			/>
	)
}

export default SignIn