import Link from 'next/link'
//import headerStyles from '../styles/header.module.css'

export default function Header(){
    return(
        <div className='w-screen bg-midnight p-8 m-0'>
            <Link href='/'>
                <a>
                    <h1 className='italic text-4xl'>My-Tech</h1>
                </a>
            </Link>
        </div>
    )
}