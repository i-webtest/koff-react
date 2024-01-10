import { Container } from '../Container/Container';
import s from './Order.module.scss';

export const Order = () => (
  <section className={s.order}>
    <Container className={s.order__container}>
      <div className={s.order__content}>
        <div className={s.order__header}>
          <h2 className={s.order__title}>Заказ успешно размещен</h2>
          <p className={s.order__price}>20 000 ₽</p>
        </div>

        <p className={s.order__number}>№43435</p>

        <div className={s['order__table-wrapper']}>
          <h3 className={s['order__table-title']}>Данные доставки</h3>

          <table className={s.order__table}>
            <tbody>
              <tr className={s.table__row}>
                <td className={s.table__field}>Получатель</td>
                <td className={s.table__value}>Иванов Петр Александрович</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Телефон</td>
                <td className={s.table__value}>+7 (737) 346 23 00</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>E-mail</td>
                <td className={s.table__value}>Ivanov84@gmail.com</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Адрес доставки</td>
                <td className={s.table__value}>
                  Москва, ул. Ленина, 21, кв. 33
                </td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Способ оплаты</td>
                <td className={s.table__value}>Картой при получении</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Способ получения</td>
                <td className={s.table__value}>Доставка</td>
              </tr>
            </tbody>
          </table>
        </div>

        <a className={s.order__back} href='/'>
          На главную
        </a>
      </div>
    </Container>
  </section>
);
