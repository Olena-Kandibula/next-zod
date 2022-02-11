import NextNprogress from 'nextjs-progressbar';
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
    // console.log('Component',Component)
    return (
        <>
        <NextNprogress          
          color="orange"          
          startPosition={0.3}          
          stopDelayMs={200}          
          height={3}          
          showOnShallow={true}          
        />
        
        <Component  {...pageProps} />        
      </>
      
    )
}