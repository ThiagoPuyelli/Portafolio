import { useFela } from "react-fela"
import defineImage from "../utils/defineImage"
import Image from "next/image"
import { useSelector } from "react-redux"
import StoreInterface from "../interfaces/StoreInterface"
import ContactForm from "../components/ConsultForm"
import Link from "next/link"
import defineTheme from "../utils/defineTheme"

export default function Contact () {
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
  const { css } = useFela()
  const contactStyle = css({
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    paddingTop: '50px',
    background: defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)'),
    color,
    '> .socialLinks': {
      display: 'flex',
      flexFlow: 'row wrap',
      marginTop: '40px',
      marginBottom: '20px',
      justifyContent: 'space-evenly',
      '> .socialLink': {
        width: '80px',
        padding: '10px',
        borderRadius: '10px',
        transition: '300ms all',
        ':hover': {
          backgroundColor: '#ccc'
        }
      },
    },
    '> .contactData': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      '> .contactTarget': {
        display: 'flex',
        flexFlow: 'column wrap',
        width: '270px',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        padding: '5px',
        boxShadow: '0px 0px 4px var(--firstGreen)',// + themeDefine(theme, 'black', 'white'),
        border: '8px solid var(--firstGreen)', //+ themeDefine(theme, 'black', 'white'),
        borderRadius: '20px',
        margin: '10px',
        '> .contactImg': {
          width: '80px',
          marginTop: '10px'
        }
      }
    }
  })

  return (
    <div className={contactStyle}>
      <h1 className='titleContact'>Contáctame</h1>
      <div className='socialLinks'>
        <div className='socialLink'>
          <Link href='https://www.instagram.com/thiago_puyelli/' passHref>
            <a target='_blank'>
              <Image src={defineImage(theme, 'instagram')} alt='Perfil de instagram'/>
            </a>
          </Link>
        </div>        
        <div className='socialLink'>
          <Link href='https://www.github.com/ThiagoPuyelli/' passHref>
            <a target='_blank'>
              <Image src={defineImage(theme, 'github')} alt='Perfil de github'/>
            </a>
          </Link>
        </div>    
      </div>
      <div className='contactData'>
        <div className='contactTarget'>
          <div className="contactImg">
            <Image className='contactImg' src={defineImage(theme, 'discord')} alt='Perfil de discord'/>
          </div>
          <p>Tato#7290</p>
        </div>
        <div className='contactTarget'>
          <div className="contactImg">
            <Image className='contactImg' src={defineImage(theme, 'phone')} alt='Perfil de discord'/>
          </div>
          <p>2325563326</p>
        </div>
        <div className='contactTarget'>
          <div className="contactImg">
            <Image className='contactImg' src={defineImage(theme, 'mail')} alt='Perfil de discord'/>
          </div>
          <p>thiagopuyelli@gmail.com</p>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  )
}