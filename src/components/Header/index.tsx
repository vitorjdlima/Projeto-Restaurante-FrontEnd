import styles from './styles.module.scss'
import Link from 'next/link'

import { useContext } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'

export function Header(){

    const { signOut } = useContext(AuthContext)
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav className={styles.menuNav}>

                    <Link href="/">
                        <a> Início </a>    
                    </Link>

                    <Link href="/categoria">
                        <a> Categoria </a>
                    </Link>

                    <Link href="/product">
                        <a> Cardápio </a>
                    </Link>

                </nav>
                <button onClick={signOut} className={styles.headerSignOut}>
                    <FiLogOut color= '#FFF' size={24} />
                </button>
            </div>
            
        </header>
    )
}