import Layout from '../Layout'
import Form from '../Form'

const SignIn = () => {
	return (
		<Layout title="Sign In">
			<Form fields={[
				["email", args => <input type="email" placeholder="Your email" autoComplete="email" {...args}/>],
				["password", args => <input type="password" placeholder="Your password" autoComplete="password" {...args}/>]
			]} />
		</Layout>
	)
}

export default SignIn