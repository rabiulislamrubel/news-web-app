import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ showPage, onPaginationCount, totalNum }) => {
  const [count, setCount] = useState(2);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    const value = showPage * count;
    onPaginationCount(value - showPage, value);
  }, [count]);

  const onButtonClick = (type) => {
    if (type === 'prev') {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(count - 1);
        if ((count - 1) % 3 === 0) {
          setMaxPageNumberLimit(maxPageNumberLimit - 3);
          setMinPageNumberLimit(minPageNumberLimit - 3);
        }
      }
    } else if (type === 'next') {
      if (totalNum === count) {
        setCount(count);
      } else {
        setCount(count + 1);
        if (count + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(maxPageNumberLimit + 3);
          setMinPageNumberLimit(minPageNumberLimit + 3);
        }
      }
    }
  };

  return (
    <div>
      <ul className='pagination-number'>
        {minPageNumberLimit >= 1 ? (
          <li onClick={() => onButtonClick('prev')}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </li>
        ) : null}

        {new Array(totalNum).fill('').map((el, ind) => {
          if (ind < maxPageNumberLimit && ind + 1 > minPageNumberLimit) {
            return (
              <li
                onClick={() => setCount(ind + 1)}
                className={count === ind + 1 ? 'active' : null}
                key={ind + 10}
              >
                <span>{ind + 1}</span>
              </li>
            );
          } else {
            return null;
          }
        })}

        {new Array(totalNum).fill('').length > maxPageNumberLimit ? (
          <li onClick={() => onButtonClick('next')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Pagination;
