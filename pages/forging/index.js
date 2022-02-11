import {MainLayout} from "../../components/MainLayout"
import Heading from "../../components/Heading"

export default function Forging({title}) {

    // const linkclickHandler = () => {
    //     Router.push('/')
    // }

    return (
        <MainLayout title={'Forging'}>           
       
            <Heading
                tag={'h1'}                
                text={'Forging page'}                
            />
            {/* <button onClick={linkclickHandler}>Go back to Home</button>
            <button onClick = {() => Router.push('/contacts')}>Go to Contacts</button> */}
        </MainLayout>
    )
}