import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/slice/fetchDataSlice'; 
import Loader from './Loader';
import image from '../assets/NewsImage.jpg';
const DisplayNews = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { category } = params;

  useEffect(() => {
    dispatch(fetchNews(category)); 
  }, [category, dispatch]);

  const isLoading = useSelector((state) => state.news.isLoading[category]);
  const newsData = useSelector((state) => state.news.data[category]?.articles || []);
  const error = useSelector((state) => state.news.error[category]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading news.</div>;
  }

  return (
    <div className='h-auto w-full pt-20 flex flex-wrap p-8 content-evenly justify-center gap-x-5 gap-y-5'>
      {newsData?.map((news, index) => (
        <div key={index} className="max-w-xs w-full max-h-full bg-white rounded-3xl shadow">
          <a href="#">
            <img className="rounded-3xl w-full h-48 object-cover" src={news.urlToImage ? news.urlToImage : image} alt="News thumbnail" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className=" text-xl h-20 font-bold tracking-tight text-gray-900">{news.title ? news.title.slice(0,50) + '...' : `No title available` }</h5>
            </a>
            <p className="mb-3 font-normal min-h-24 max-h-24 text-gray-700">{news.content ? news.content.slice(0,100) + '...':`No content available`}</p>
            <a href={news.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayNews;
