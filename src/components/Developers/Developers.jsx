import s from './Developers.module.scss';

export const Developers = () => (
  <ul className={s.developers}>
    <li>
      Designer:&nbsp;
      <a
        className={s.link}
        href='https://t.me/Mrshmallowww'
        target='_blank'
        rel='noreferrer'
      >
        Anastasia Ilina
      </a>
    </li>

    <li>
      Developer:&nbsp;
      <a
        className={s.link}
        href='https://t.me/stasbass'
        target='_blank'
        rel='noreferrer'
      >
        Stanislav Groshev
      </a>
    </li>
  </ul>
);
