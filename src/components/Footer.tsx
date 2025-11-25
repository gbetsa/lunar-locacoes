import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Lunar Locações</h3>
            <p>Qualidade e confiança em cada locação</p>
            <p>Equipamentos e serviços de qualidade para todas as suas necessidades</p>
          </div>

          <div className={styles.section}>
            <h3>Contato</h3>
            <p>Email: contato@lunarlocacoes.com.br</p>
            <p>WhatsApp: (11) 96311-9191</p>
          </div>

          <div className={styles.section}>
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta: 9h às 18h</p>
            <p>Sábado: 9h às 13h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Lunar Locações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
