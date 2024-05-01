import React, { useEffect, useState } from 'react';
import { Button, Table, Input, Radio, Select } from "antd";
import { debounce } from 'lodash';
import Footer from './Footer';


const { Search } = Input;
const { Option } = Select;

function Posts() {


  const queryParams = new URLSearchParams(window.location.search);


  const api = "https://dummyjson.com/posts";
  const [postdata, setpostsdata] = useState([]);
  const [globaldata, setglobaldata] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(parseInt(queryParams.get('limit')) || 15);
  const [currPage, setCurrPage] = useState(parseInt(queryParams.get('page')) || 1);
  // const [searchText, setSearchText] = useState('');
  const [searchText, setSearchText] = useState(queryParams.get('search') || '');
  const [selectedTags, setSelectedTags] = useState([]);


  const updateURL = () => {
    const params = new URLSearchParams();
    params.set('page', currPage);
    // params.set('limit', limit);
    if (selectedTags.length > 0) {
      params.set('tags', selectedTags.join(','));
    }
    if (searchText.trim() !== '') {
      params.set('search', searchText.trim());
    }
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
  };



  const fetchData = async () => {
    setLoading(true);
    const skip = (currPage - 1) * limit;
    try {
      let res = await fetch(`${api}?skip=${skip}&limit=${limit}`);
      let data = await res.json();
      console.log("data", data)
      setpostsdata(data.posts);
      setglobaldata(data.posts);
      setTotalPage(data.total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    updateURL();
  }, [currPage, limit,searchText, selectedTags]);



  useEffect(() => {
    const filterSearch = globaldata.filter(item =>
      selectedTags.length === 0 || selectedTags.every(tag => item.tags.includes(tag))
    );
    setpostsdata(filterSearch.filter(item =>
      item.body.toLowerCase().includes(searchText.toLowerCase())
    ));
  }, [selectedTags, globaldata, searchText]);


  const handlePageChange = (page) => {
    // setCurrPage(page, limit);
    setCurrPage(page);
  };


  const handleSearch = debounce((value) => {
    setSearchText(value);
  }, 300);


  const handleTagChange = (selectedValues) => {
    setSelectedTags(selectedValues);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      render: (tags) => (
        <span>
          {tags.map((tag, index) => (
            <span key={index}>
              {tag}
              {index < tags.length - 1 ? ', ' : ''}
            </span>
          ))}
        </span>
      ),
    },
  ];

  return (

<>

    <div className='main_cont'>

      <div className="section1">
      <Select
            mode="multiple"
            placeholder="Filter by tags"
            style={{ width: '100%' }}
            onChange={handleTagChange}
            value={selectedTags}
          >
        {globaldata.reduce((tags, post) => {
          post.tags.forEach(tag => {
            if (!tags.includes(tag)) {
              tags.push(tag);
            }
          });
          return tags;
        }, []).map((tag, index) => (
          <Option key={index} value={tag}>{tag}</Option>
        ))}
      </Select>

      <Search
        placeholder="Search by body"
        allowClear
        size="large"
        onSearch={handleSearch}
        onChange={(e) => handleSearch(e.target.value)}
        value={searchText}
      />
      </div>

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

    

</>

  );
}

export default Posts;
