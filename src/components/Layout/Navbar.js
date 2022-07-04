import Link from 'next/link'
import styles from '../../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.topnav}>
            <Link  href="/"> Home </Link>
            <Link  href="/dashboard"> Dashboard </Link>
            <Link  href="/messages/sup"> FAQ </Link>
            <Link  href="/messages/fourofou"> 401 </Link>
        </div>

    )
}

export default Navbar