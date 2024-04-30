import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { MainRoute } from './router/MainRouter';
import { AppContextProvider } from './component/ContextAPI';
import { LoadingOutlined } from '@ant-design/icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingOutlined className='flex items-center justify-center h-[100vh]' />}>
      <Provider store={store}>
        <PersistGate loading={'...loading'} persistor={persistor}>
          <AppContextProvider>
            <RouterProvider router={MainRoute} />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
