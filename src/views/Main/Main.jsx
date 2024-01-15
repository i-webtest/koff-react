// import { Order } from '../Order/Order';

import { useDispatch, useSelector } from 'react-redux';
import { Catalog } from '../../components/Catalog/Catalog';
import { Goods } from '../../components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import { fetchProducts } from '../../store/products/productsSlice';

export const Main = () => {
  const dispatch = useDispatch();

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка...</div>;
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>;

  if (loadingProducts) return <div>Загрузка...</div>;
  if (errorProducts) return <div>Ошибка: {errorProducts}</div>;

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
      {/* <Order /> */}
    </main>
  );
};
