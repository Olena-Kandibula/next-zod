import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import { MainLayout } from "../../components/MainLayout";

export default function Stairway({ stairway:serverStairway }) {
    
    const [stairway, setStairway] = useState(serverStairway)
    const router = useRouter()
    
    useEffect(() => {
        async function load() {
        const response = await fetch(`http://localhost:4200/stairs/${router.query.id}`)//это router.query.name на сервере 
        const data = await response.json()
        setStairway(data)
        }
        if (!serverStairway) {
            load()
        }
        
    }, [])

    if (!stairway) {//пока не пришел ответб т,е, ждем post на клиенте
            return <MainLayout>
                <h2>Loading.....stairway</h2>
            </MainLayout>
        }

    // const router = useRouter()
    // console.log(router.query.id)
    // const id = router.query.id
    // console.log(post)

    return (
        <MainLayout  title={'Staitway page'}>
            <h1>This is {stairway.title}</h1>            
            <hr />
            <p>{stairway.body}</p> 
            <Link href = {`/stairs`}><a>Back to stairs</a></Link>
           
        </MainLayout>
    )   
}
// getInitialProps если нужно котролировать рендеринг на фронт и сервер сайт рендеринг
// Stairway.getInitialProps = async (ctx, req) => {//ctx  это context
Stairway.getInitialProps = async ({ query, req }) => {//query  это context.query
    // console.log('ctx', ctx)
    // console.log('query.name', query.name)
    // console.log('query.id', query.id)
    // const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    if (!req) {
        return {stairway:null}
    }
    const response = await fetch(`http://localhost:4200/stairs/${query.id}`)
    // const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)//это query.id на клиенте
    const stairway = await response.json()
//    console.log("stairway", stairway)
 
    return {
        // posts: posts// то же самое
        stairway
        
    }
    // console.log(ctx.query)
    // return{}
}

// export async function getServerSideProps({ query, req }) {// если только сервер сайт рендеринг
  
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)//это query.id на клиенте
//     const post = await response.json()
 
//     return {
//         props: {
//             post,
//         }
        
//     }
// }