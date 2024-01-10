import { Logo } from '../../components/Logo/Logo';
import { Container } from '../Container/Container';
import s from './Footer.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.footer__container}>
      <div className={s.logo}>
        <Logo />
      </div>

      <div className={s.footer__contacts}>Contacts</div>

      <ul className={s['footer__developer-list']}>
        <li className={s['footer__developer-item']}>Designer:</li>
        <li className={s['footer__developer-item']}>Developer:</li>
      </ul>

      <p className={s.footer__copyright}>&copy; Koff, 2023</p>
    </Container>
  </footer>
);
