import Document, {Head,Main,NextScript} from 'next/document'

class MyDocument extends Document {
    render(){
        return (
            <html lang="en">
                <Head>
                    <meta name="author" content="msimou"/>
                    <meta name="description" content="A site for my programming portofolio"/>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
                    <link href="/static/css/main.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </html>
        )
    }   
}

export default MyDocument