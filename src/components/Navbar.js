import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.topnav}>
            <Link  href="/"> Home </Link>
            <Link  href="/about"> Dashboard </Link>
            <Link  href="/messages/sup"> FAQ </Link>
        </div>

    )
}

export default Navbar