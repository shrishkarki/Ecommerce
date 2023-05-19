
import { useParams } from 'react-router-dom';
import { IndexContext } from '../Components/ContextApi/IndexContext';
import { useContext, useEffect, useState } from 'react';
import PageNavigation from '../Components/PageNavigation/PageNavigation';
import MyImages from '../Components/MyImages/MyImages';
import FormatPrice from '../Components/Helpers/FormatPrice';
import Star from '../Components/Star/Star';
import Cart from '../Components/AddToCart/Cart';



import { CiDeliveryTruck } from 'react-icons/ci';
import { TbReplaceFilled,TbTruckDelivery } from 'react-icons/tb';
import { GrShieldSecurity } from 'react-icons/gr';



const SingleProduct = () => {
  
  const { id } = useParams();
  const SingleDataApi = `https://api.pujakaitem.com/api/products/?id=${id}`;

  const { singleProductFn, isSingleLoading, singleProductData } = useContext(IndexContext);

  const { id:shrish, name, company, price, description, category, stock, reviews,stars, image } = singleProductData;

  





  useEffect(() => {
    singleProductFn(SingleDataApi);
  }, [])

  if (isSingleLoading) {
    return <h1>.......loading</h1>
  }


  return (
    <>
      <PageNavigation title={name} />
      <div className='mt-5 md:mt-10'>
        <div className='grid  lg:grid-cols-2 gap-2 md:gap-5 lg:gap-10 px-3 md:px-7 mdlg:px-20 lg:px-32'>
          <div className='product-image'>
            <MyImages imgs={image}/>
          </div>

          <div className='product-data'>
            <p className='uppercase font-bold'>{name}</p>
           
           <Star stars={stars} reviews={reviews}/>
            <p className='my-4 font-semibold'> MRP: <del><FormatPrice price={price+250000}/></del></p>
            <p className='text-green-700 font-bold my-2'> Deal of the Day : <FormatPrice price={price}/></p>
            <p className='my-3'>{description}</p>

            <div className='product-services w-full flex justify-between  text-xs border-b-[3px] pb-4 text-slate-600'> 

            <div className='free-delivery flex justify-center flex-col items-center '>
            <CiDeliveryTruck className='w-11  lg:w-14 h-9 lg:h-12 text-center bg-[#f9f9ff] rounded-[50%] px-3'/>
            <p>Free Delivery</p>
            </div>

            <div className='replacement flex justify-center flex-col items-center'>
            <TbReplaceFilled className='w-11  lg:w-14 h-9 lg:h-12 text-center bg-[#f9f9ff] rounded-[50%] px-3'/>
            <p>30 Days Replacement</p>
            </div>

            <div className='Delivered flex justify-center flex-col items-center'>
            <TbTruckDelivery className='w-11  lg:w-14 h-9 lg:h-12 text-center bg-[#f9f9ff] rounded-[50%] px-3'/>
            <p>Karki Delivered</p>
            </div>

            <div className='warrenty flex justify-center flex-col items-center'>
            <GrShieldSecurity className='w-11  lg:w-14 h-9 lg:h-12 text-center bg-[#f9f9ff] rounded-[50%] px-3'/>
            <p>2 Year Warrenty</p>
            </div>

           

            

            </div>

            <div className='stock-Available mt-4'>
          <p className='text-slate-600 my-2'>Available:
            <span className='font-bold'> {stock > 0? "In Stock":"Not Available"}</span>
          </p>
            </div>

           
          <p className='text-slate-600 my-2'>ID: <span className='font-bold'>{id}</span></p>
           
           <p className='text-slate-600 my-2'>Brand: <span className='font-bold'>{company}</span></p>

            {
        stock >0 && <Cart product={singleProductData}/>
      }
          </div>

        </div>

      </div>
     
    </>

  )
}

export default SingleProduct;