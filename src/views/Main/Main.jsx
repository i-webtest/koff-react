// import { Order } from '../Order/Order';

import { useDispatch, useSelector } from 'react-redux';
import { Catalog } from '../../components/Catalog/Catalog';
import { Goods } from '../../components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import { fetchProducts } from '../../store/products/productsSlice';

export const Main = () => {
  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
      {/* <Order /> */}
    </main>
  );
};
