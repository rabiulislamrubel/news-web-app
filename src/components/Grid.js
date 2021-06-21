import React, { useEffect, useState } from 'react';
import GridCard from './GridCard';
import '../App.css';
import Pagination from './Pagination';

const Grid = () => {
  const [gridData, setGridData] = useState([]);

  const [showPage, setShowPage] = useState(9);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPage,
  });

  const onPaginationCount = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const totalNum = Math.ceil(gridData.length / showPage);

  useEffect(() => {
    fetch('https://api.first.org/data/v1/news')
      .then((res) => res.json())
      .then((data) => setGridData(data.data));
  }, []);

  const handleGridItemRemove = (id) => {
    const filterData = gridData.filter((vul) => vul.id !== id);
    setGridData(filterData);
  };
  return (
    <section className='grid-section'>
      <section className='inner-grid'>
        {gridData.slice(pagination.start, pagination.end).map((gd) => (
          <GridCard
            key={gd.id}
            gridData={gd}
            handleGridItemRemove={handleGridItemRemove}
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

export default Grid;
