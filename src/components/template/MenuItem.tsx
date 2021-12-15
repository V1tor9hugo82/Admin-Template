import Link from 'next/link'

interface MenuItemProps {
  texto: string
  icone: any
  url?: string
  className?: string
  onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <a className={`
         flex flex-col justify-center items-center
         h-20 w-20  text-gray-600
         dark:text-gray-200  
         ${props.className}
       `}>
        {props.icone}
        <span className={`
          text-xs font-light
        `}>
          {props.texto}
        </span>
      </a>
    )
  }
  return (
    <li onClick={props.onClick} className={`
        hover:bg-blue-100 dark:hover:bg-blue-800
        cursor-pointer
        rounded-full
    `}>
      {props.url ? (
        <Link href={props.url}>
          {renderizarLink()}
        </Link>
      ) : (
        renderizarLink()
      )}
    </li>
  )
}