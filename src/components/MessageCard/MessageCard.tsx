import styles from './MessageCard.module.css';

type Props = {
  children: React.ReactNode;
};

export const MessageCard = ({ children }: Props) => {
  return (
    <section className={styles.messageCard}>
      <p>
        {children}
      </p>
    </section>
  );
};
