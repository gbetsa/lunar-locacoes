import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página não encontrada</h2>
        <p className={styles.text}>
          A página que você está procurando não existe ou foi removida.
        </p>
        <button 
          className={styles.button}
          onClick={() => navigate('/')}
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
