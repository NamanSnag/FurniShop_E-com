import React, { useEffect, useState } from "react";
import { Furnituretype, Header, Card } from "../../components";
import { MdOutlineSearch } from "react-icons/md";
import axios from "axios";

import "./style.scss";

const Landingpage = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/product/get');
        setData(response.data);
        setFilterData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFilterData(filtered);
  };
  
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <div className="products">
          <div className="searchbar">
            <input
              type="search"
              placeholder="Search for produts..."
              className="search_input"
              onChange={handleSearch}
            />
            <button className="btn-search">
              <MdOutlineSearch />
            </button>
          </div>
          <div className="product__List">
          {
            filterData.map((item, index) => 
              <Card key={index} item={item} />
            )
          }
          </div>
        </div>
        <h1 className="homeTitle"># Browse by Furniture type</h1>
        <Furnituretype />
      </div>
    </div>
  );
};

export default Landingpage;
