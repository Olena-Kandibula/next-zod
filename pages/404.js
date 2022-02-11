import Link from "next/link"
import { MainLayout } from "../components/MainLayout"
import Heading from "../components/Heading"
import st from '../styles/error.module.scss'
// import variables from '../styles/variables.module.scss'

export default function ErrorPage() {
    return (
         <MainLayout title={'Forging'}>           
       
            <Heading
                tag={'h1'}                
                text={'Not Found'}                
            />
            <Heading 
                tag ={'h2'}                
                text={'404'} 
                style={`${st.error}`}
            />
           
            <p>
                Please
                <Link href={'/'}><a>go back Home</a></Link>
            </p>
            {/* <button onClick={linkclickHandler}>Go back to Home</button>
            <button onClick = {() => Router.push('/contacts')}>Go to Contacts</button> */}
        </MainLayout>
        
            
          
        
    )
}

// export default function Custom404() {
//   return (
//         <MainLayout>
//           <h1
//             //   className={st.error}
//           >
          
// Not Found
//             </h1>
//           <p >
//               {/* <p color={variables.accentColor}> */}
//                 Please
//                 <Link href={'/'}><a>go back Home</a></Link>
//             </p>
//         </MainLayout>
//     )
// }