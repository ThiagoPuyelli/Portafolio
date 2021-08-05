import Head from 'next/head'
import { useFela } from 'react-fela'

export default function Home() {
  const { css } = useFela()
  const headerStyle = css({
    position: 'fixed',
    left: '20px',
    top: '20px',
    
  })
  
  return (
    <Head>
      
    </Head>
  )
}
