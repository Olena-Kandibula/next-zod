import Link from "next/link"
import Head from "next/head"
import Header from "./Header"


export  function MainLayout({children, title= 'zodchiy', keyword='stairs'}) {
    return (
        <>
            <Head>
                <title>{title}|zodchiy</title>             
                <meta name="keywords" content="Зодчий, лестницы, харьков " />                
                <meta name="description" content="Профессионально изготавливаем лестницы Харьков"></meta>                
                {/* <meta charSet="utf-8" />                 */}
            </Head>

            

            <div>
                <p>Logo</p>
                {/* <nav> */}
                <Link href={'/'}><a>Home</a></Link> 
                <Link href={'/stairs'}><a>Stairs</a></Link> 
                <Link href={'/forging'}><a>Forging</a></Link>
                <Link href={'/gallery'}><a>Gallery</a></Link>
                <Link href={'/contacts'}><a>Contacts</a></Link>                 
                    {/* <p>Navigation</p> */}
            {/* </nav> */}
            </div>
            

            <main>

               
                {children}
            </main>

            <footer>
                <h2>Footer</h2>
            </footer>

            <style jsx>{`
            /* nav{
                position:fixed;
                height:60px;
                left:0;
                right:0;
                background: grey;
                top:0;  
                display:flex;
                justify-content: space-around;
                align-items: center;

            } */

            nav a  {
                color: #fff;
                text-decoration:none;
            }

            main {
                margin-top:60px;
            }
            `}</style>
            
        </>
    )
}