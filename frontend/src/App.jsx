import CryptocurrencyCard from "./components/CryptocurrencyCard.jsx";
import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import axios from "axios";


const App = () => {

  const [currencies, setCurrencies] = useState([])
  const [currencyId, setCurrencyId] = useState(1)
  const [currencyData, setcurrencyData] = useState(null)


  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrencies').then(r => {
      const currenciesResponce = r.data
      const menuItems = [  {
        key: 'grp',
        label: 'Список криптовалют',
        type: 'group',
        children: currenciesResponce.map(c => {
          return {label: c.name, key: c.id}
        })
      },
      ]
      setCurrencies(menuItems)
    })
  }

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(r => {
      setcurrencyData(r.data)
    })
  }


  useEffect(() => {
    fetchCurrencies()
  }, []);

  useEffect(() => {
    setcurrencyData(null)
    fetchCurrency()
  }, [currencyId]);


  const onClick = (e) => {
    setCurrencyId(e.key)
  };


  return (
    <div className="flex">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currencies}
        className="h-screen overflow-scroll"
      />
      <div className="mx-auto my-auto">
      {currencyData ? <CryptocurrencyCard currency={currencyData}/> : <Spin size="large"/>}
      </div>
    </div>
  );
};
export default App;
