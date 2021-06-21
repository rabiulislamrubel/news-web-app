import React, { useEffect, useState } from 'react';
import ListCard from './ListCard';
import Pagination from './Pagination';
import '../App.css';

const List = () => {
  const [listData, setListData] = useState([]);

  const [showPage, setShowPage] = useState(9);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPage,
  });

  const onPaginationCount = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const totalNum = Math.ceil(listData.length / showPage);

  useEffect(() => {
    fetch('https://api.first.org/data/v1/news')
      .then((res) => res.json())
      .then((data) => setListData(data.data));
  }, []);

  const handleListItemRemove = (id) => {
    const filterData = listData.filter((vul) => vul.id !== id);
    setListData(filterData);
  };

  return (
    <section className='list-section'>
      <section className='inner-list'>
        {listData.slice(pagination.start, pagination.end).map((ld) => (
          <ListCard
            key={ld.id}
            listData={ld}
            handleListItemRemove={handleListItemRemove}
          />
        ))}
      </section>
      <section className='pagination'>
        <Pagination
          showPage={showPage}
          onPaginationCount={onPaginationCount}
          totalNum={totalNum}
        />
      </section>
    </section>
  );
};

export default List;
