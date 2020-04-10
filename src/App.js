import React, { Suspense } from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Main from "./Main";

import Footer from "./Footer";

function App ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <div id="div_firstpage">
      <button onClick={() => changeLanguage('fr')}>Fr</button>
      <button onClick={() => changeLanguage('en')}>En</button>
      <h1  style={{color:'#fff '}}>{t('messages.welcome')}</h1>
      <Suspense fallback={(<div>Loading</div>)}>
      <Main/>
      </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

export default withNamespaces()(App);