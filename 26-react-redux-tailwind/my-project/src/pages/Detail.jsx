import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useParams from "react-router-dom"
import { productsActionDetail } from '../redux/actions/products';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const {product} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(productsActionDetail())
  }, [dispatch])
  

  return (
    <div>
      <img src={product?.image} alt="" />
    </div>
  )
}

export default Detail
