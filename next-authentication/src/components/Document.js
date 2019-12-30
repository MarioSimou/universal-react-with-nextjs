import Document, {Html, Head, Main, NextScript} from 'next/document'


class MyDocument extends Document{
	render(){
		return (
			<Html>
				<Head>
					<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
				<style global jsx>{`
					* {
						padding: 0;
						margin: 0;
						box-sizing: border-box;
						font-family: 'Roboto', sans-serif;
					}
					:root {
						--primary-main: blue;
						font-size: 16px;
					}
					a {
						text-decoration: none;
						color: var(--primary-main);
						font-size: 1rem;
					}
					a:hover {
						text-decoration: underline;
					}
				`}</style>
			</Html>
		)	
	}
}


export default MyDocument