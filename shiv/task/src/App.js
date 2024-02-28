
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Upload from './components/Upload';
import List from './components/List';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Login':
        return <Login handlePageChange={handlePageChange} />;
      case 'Upload':
        return <Upload handlePageChange={handlePageChange} />;
      case 'List':
        return <List handlePageChange={handlePageChange} />;
      default:
        return <Login handlePageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;

