import { Link, useRouteError } from 'react-router-dom'
import styles from './error.module.scss'

const Error = ({ errorMessage }) => {
  const error = useRouteError()

  // Affiche le message d'erreur de manière appropriée
  const renderError = () => {
    if (!error) return null

    if (typeof error === 'string') {
      return <p>{error}</p>
    }

    if (
      error instanceof Error ||
      (typeof error === 'object' && error.message)
    ) {
      return <p>{error.message}</p>
    }

    return null
  }

  return (
    <section className={styles.errorPage} id="error-page">
      <h1 className={styles.text404}>404</h1>
      {renderError()}
      {errorMessage ? (
        <p className={styles.errorMessage}>{errorMessage}</p>
      ) : (
        <p className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </p>
      )}

      <Link className={styles.homeLink} to={'/'}>
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default Error
