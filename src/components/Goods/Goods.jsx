import { Container } from '../../views/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import s from './Goods.module.scss';

export const Goods = ({ data }) => {
  console.log('data: ', data);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>

        <ul className={s.list}>
          {data.map((item, i) => (
            <li key={i}>
              <CardItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
