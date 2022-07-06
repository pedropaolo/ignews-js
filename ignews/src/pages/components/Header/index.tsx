import styles from '../Header/styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig-news" />
                <nav>
                    <a className={styles.active}>HOME</a>
                    <a>POSTS</a>
                </nav>
            </div>
        </header>
    )
}