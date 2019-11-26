import Layout from '../components/Layout'

export default ({status, success}) => {
    return (
        <Layout title={status}>
            {status === 404 && !success && <p>Couldn't load your data</p>}
            {!success && status !== 404 && <p>Couldn't get that page, sorry!</p>}
        </Layout>
    )
}