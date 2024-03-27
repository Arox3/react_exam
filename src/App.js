// App.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import Filter from './Filter';
import BackToTopButton from './BackToTopButton';


export const DataContext = createContext(); // export DataContext

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter(profile => {
      return profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <h1>Profile Cards</h1>
      <Filter handleSearch={handleSearch} />
      <DataContext.Provider value={filteredData}>
        <List />
      </DataContext.Provider>
      <BackToTopButton />
    </div>
  );
};

export default App;
