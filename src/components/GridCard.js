import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const GridCard = ({ gridData, handleGridItemRemove }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { id, published, summary, title } = gridData;

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen((change) => !change);
  };

  return (
    <div className='inner'>
      <div className='grid-card' onClick={openModal}>
        <div className='close' style={{ color: 'red', textAlign: 'right' }}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ padding: '2px' }}
            onClick={() => handleGridItemRemove(id)}
          />
        </div>
        <div className='grid-cnt'>
          <h3>{title}</h3>
          <p className='summary'>{summary}</p>
          <p>{published}</p>
        </div>
        <div className='grid-img'></div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h1>'iframe' dose not show because of Content Security police</h1>
        {/* <iframe src='https://www.first.org/blog/'></iframe> */}
      </Modal>
    </div>
  );
};

export default GridCard;
