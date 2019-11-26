import Layout from "../components/Layout";
import fetch from 'node-fetch'
import Error from './_error'

const About = props => {
  const [user, setUser] = React.useState({})
  React.useEffect(() => setUser(props.user),[])
  if(!props.success){
    return (<Error status={props.status} success={props.success}/>)
  }

  return (
    <Layout title="About">
      <p>{user.name}</p>
      <img src={user.avatar_url} alt="me" />
    </Layout>
  );
};

About.getInitialProps = async ({req}) => {
  const response = await fetch('https://api.github.com/users/masriosimou')
  const user = await response.json()

  return {user, success: response.ok, status: response.status }
}


export default About;
