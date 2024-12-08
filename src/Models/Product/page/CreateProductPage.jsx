import React, { useEffect, useState } from 'react'
import { useAsync, useAxios, useCategoryStore, useFieldArray, useForm, useMeasuresStore, useProductStore } from '../../../hooks';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { ProductDetails } from '../components/ProductDetails';

const ProductForm = {
  name: '',
  description: '',
  name_category: '',
};

const MeasureForm = {
  stock: '',
  min_stock: '',
  measures_id: '',
  price: '',
  income:'',
  measures_name: '',
};

export const CreateProductPage = () => {
    
    const { startGetSearchMeasures } = useMeasuresStore();
    const { startGetSearchCategory } = useCategoryStore();
    const { startAddNewProduct } = useProductStore();
    const { callEndpoint } = useAxios();

    const [medidas, setMedidas] = useState([]);
    const [categorys, setCategorys] = useState([]);

    const { field:category, addArray:addArrayCategory, removeArray:removeArrayCategory } = useFieldArray();
    const { field:measures, addArray:addArrayMeasure, removeArray:removeArrayMeadure, } = useFieldArray();
    const { field:img, addArray:addArrayImg, removeArray:removeArrayImg } = useFieldArray();

    const { formState:product, onInputChange:onOrdenChangeProduct, setValue:setValueProduct} = useForm(ProductForm);
    const { formState:measure, onInputChange:onOrdenChangeMeasure, setValue:setValueMeasure, onResetForm } = useForm(MeasureForm);

    const adapterMedidas = obj => setMedidas(obj.data.data);
    const adapterCategory = obj => setCategorys(obj.data.data);

    const getDataMedida = async() => await callEndpoint(startGetSearchMeasures(0, 0, measure.measures_name));
    const getDataCategory = async() => await callEndpoint(startGetSearchCategory(0, 0, product.name_category));

    useAsync(getDataMedida, adapterMedidas, () => {}, [measure.measures_name], () => {return true});
    useAsync(getDataCategory, adapterCategory, () => {}, [product.name_category], () => {return true});
    
    const onSubmit = () => {
      startAddNewProduct({...product, measures, category, img});
    };

    const onSubmitMeasure = () => {
      addArrayMeasure({
        ...measure, 
        stock: parseInt(measure.stock), 
        min_stock: parseInt(measure.min_stock), 
        price: parseFloat(measure.price)
      });
      onResetForm()
    };

    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === 'F2') {
          window.open('https://jose-yc.github.io/ayuda-react-drexplain', '_blank');
        }
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

  return (
    <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400  
         dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-hidden  shadow-2xl 
            bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
                <div className='flex items-center justify-between mb-5'>
                    <h1 className='text-xl uppercase font-bold 
                    tracking-[5px] dark:text-white'>
                      Crear producto
                    </h1>
                </div>
                <ProductDetails 
                  initialForm={{
                    ...product, ...measure, 
                    categorys, suggestions:medidas, 
                    tags: category, measures, img 
                  }} 
                  onChange={{ 
                    onOrdenChangeProduct, 
                    onOrdenChangeMeasure 
                  }} 
                  onfunction={{ 
                    setValueMeasure,
                    setValueProduct,
                    addArrayCategory, 
                    onSubmitMeasure, 
                    addArrayImg, 
                    removeArrayCategory, 
                    removeArrayMeadure, 
                    removeArrayImg 
                  }}
                  onSubmit={onSubmit}
                  />
            </div>
        </section>
    </LayoutPage>
  )
}
