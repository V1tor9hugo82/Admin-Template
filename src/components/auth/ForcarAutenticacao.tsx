import Head from 'next/head'
import { router } from 'next/router'
import Images from 'next/image'
import triangles from '../../../public/images/Triangles.gif'
import useAuth from '../../data/hook/useAuth'


export default function ForcarAutenticacao(props) {

  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
               if(!document.cookie?.includes("admin-template-cod3r-auth")){
                  window.location.href "/autenticacao"
               }
             `
            }}
          />
        </Head>
        {props.children}
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div className={`
        flex justify-center items-center
        h-screen 
      `}>
        <Images src={triangles} />

      </div>
    )
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo()
  } else if (carregando) {
    return renderizarCarregando()
  } else {
    router.push('/autenticacao')
    return null
  }
}