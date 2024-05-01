import React, { useEffect, useState } from 'react'
import { Button, Table, Input } from "antd";
const { Search } = Input;

function Posts() {

  const api = "https://dummyjson.com/posts";
  const [postdata, setpostsdata] = useState([]);
  const [globaldata, setglobaldata] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(30);
  const [currPage, setCurrPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    setLoading(true);
    const skip = (currPage - 1) * limit;
    try {
      let res = await fetch(`${api}?skip=${skip}&limit=${limit}`);
      let data = await res.json();
      console.log("data", data);
      setpostsdata(data.posts);
      setglobaldata(data.posts)
      setTotalPage(data.total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currPage]); 

  const handlePageChange = (page) => {
    setCurrPage(page);
  }

  const handleSearch = (value) => {
    setSearchText(value);
    const filterSearch = globaldata.filter(item =>
      item.body.toLowerCase().includes(value.toLowerCase())
    );
    setpostsdata(filterSearch); 
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'userId',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
    },
  ];

  return (

    <div>


    <Search
        placeholder="Search by body"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />

    <div className='container'>
  
      <Table
        columns={columns}
        dataSource={postdata} 
        loading={loading}
        pagination={{
          pageSize: limit,
          total: totalPage,
          current: currPage,
          onChange: handlePageChange
        }}
      />
    </div>

    </div>

  )
}

export default Posts;
