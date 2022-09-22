import Link from 'next/link'
import styles from './layout.module.css'

export default function Footer(){
    return(
        <div className='bg-midnight p-8 m-0 text-center'>
            <small>
                <p className={styles.copyright}>© 2022 chipmunk</p>
            </small>
        </div>
    )
}