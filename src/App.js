import React, { useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index';
import CatalogPage from './Pages/CatalogPage/index';
import DetailPage from './Pages/DetailPage/index';
import Footer from './Components/Footer/index';
import PartsPage from './Pages/PartsPage';
import NotFound from './Pages/NotFound/NotFound';
import DetailPageParts from './Pages/DetailSpareParts';
import { useDispatch } from 'react-redux';
import { getAllInfo } from './redux/infoSlice';
import { getAllCategories, getAllCategoriesParts } from './redux/motorsSlice';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllInfo())
    dispatch(getAllCategories())
    dispatch(getAllCategoriesParts())
  }, [dispatch])

  return (
    <>
      <HelmetProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/detail-motors/:id' element={<DetailPage />} />
          <Route path='/parts' element={<PartsPage />} />
          <Route path='/detail-parts/:parts_id' element={<DetailPageParts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <div className='itc_ref_box'>
          Разработано:⠀⠀
          <a className='itc_ref' target="_blank" href="http://itcdevs.com/">ITC Devs&reg;</a>
        </div>
      </HelmetProvider>
    </>
  );
};

export default App;