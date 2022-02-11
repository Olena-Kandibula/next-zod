import { MainLayout } from "../../components/MainLayout";
import Heading from "../../components/Heading";

export default function Gallery({ title }) {


    return (
        <MainLayout title={'our gallery'}>

            <Heading
                tag={'h1'}                
                text={'Gallery page'}                
            />
           
        </MainLayout>
    );
}