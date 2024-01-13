import { Container } from '../../views/Container/Container';
import s from './Catalog.module.scss';

export const Catalog = () => (
  <div className={s.catalog}>
    <Container className={s.container}>
      <ul className={s.list}>
        <li>
          <a className={s.link} href=''>
            Диваны
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Шкафы
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Стулья
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Тумбы
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Кровати
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Столы
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Комоды
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Матрасы
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Пуфики
          </a>
        </li>

        <li>
          <a className={s.link} href=''>
            Стеллажи
          </a>
        </li>
      </ul>
    </Container>
  </div>
);
