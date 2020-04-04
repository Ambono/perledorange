import React from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Main from "./Main";
function App ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('fr')}>Fr</button>
      <button onClick={() => changeLanguage('en')}>En</button>
      <h1>{t('messages.welcome')}</h1>
      <Main/>
    </div>
  )
}

export default withNamespaces()(App);