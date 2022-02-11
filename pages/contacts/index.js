import React from "react"
import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"
import Heading from "../../components/Heading"

export default function Contacts({title}) {

    const linkclickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'zodchiy contacts'}>           
       
            <Heading
                tag={'h1'}                
                text={'Contacts page'}                
            />
            
            <button onClick={linkclickHandler}>Go back to Home</button>
            <button onClick = {() => Router.push('/stairs')}>Go to Stairs</button>
        </MainLayout>
    )
}