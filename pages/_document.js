import Document, { Html, Head, Main, NextScript } from 'next/document'
import Heading from '../components/Heading'
export default class MyDocument extends Document {

    render() {
        return (
            <Html>
            {/* <Html lang="ru"> */}
                <Head>
                    <meta charSet="utf-8" />                     
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
                </Head>
            
                {/* <body> */}
                <body className="bg-white">
                    <Main />
                    
                    <NextScript />
                </body>
            </Html>
        )
    }

}
