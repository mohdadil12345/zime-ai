import React, { useEffect, useState } from 'react'
import { Button, Table } from "antd";

function Posts() {

  const api = "https://dummyjson.com/posts";
  const [postdata, setpostsdata] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(30);
  const [currPage, setCurrPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const skip = (currPage - 1) * limit;
    try {
      let res = await fetch(`${api}?skip=${skip}&limit=${limit}`);
      let data = await res.json();
      console.log("data", data);
      setpostsdata(data.posts);
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
  )
}

export default Posts;
