import { useState, useEffect } from "react"
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import Heading from "../../components/Heading";


export default function Stairs({stairs:serverStairs}) {
    // const linkclickHandler = () => {
    //     Router.push('/')
    // }
    const [stairs, setStairs] = useState(serverStairs)

    useEffect(() => {
        async function load() {
             const response = await fetch('http://localhost:4200/stairs')
            // const newLocal = `${process.env.API_URL}/stairs`
    // const response = await fetch(newLocal)
        // const response = await fetch(newLocal)//это router.query.id на сервере 
        const data = await response.json()
        setStairs(data)
        }
        if (!serverStairs) {
            load()
        }
        // load()
        
    }, [])

    if (!stairs) {//пока не пришел ответб т,е, ждем post на клиенте
            return <MainLayout>
                <h2>Loading.....stairs.</h2>
            </MainLayout>
        }
    return (
        <MainLayout title={'Stairs zodchiy'}>

           <Heading
                tag={'h1'}                
                text={'Stairs page'}                
            />
            {/* <pre>{JSON.stringify(stairs, null,2)}</pre> */}
             <ul>
                {stairs.map(item => (
                    <li key={item.id}>
                        <Link href={'/stairs/[id]'} as={`/stairs/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                    </li>
                ))}

        </ul>
            
            
        </MainLayout>
    );
    }

        Stairs.getInitialProps = async ({req }) => {//req не получимб добавляем для лоадинга
    
    if (!req) {
        return {stairs:null}
    }
    const response = await fetch('http://localhost:4200/stairs')
    const stairs = await response.json()
    
    return {
        // posts: posts// то же самое
        stairs
    }
    
}