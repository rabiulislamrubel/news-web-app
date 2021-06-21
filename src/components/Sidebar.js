import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    height: '100%',
    width: '70%',
    background: '#ebf2f7',
  },
};

const Sidebar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen((change) => !change);
  };
  return (
    <div className='inner-sidebar'>
      <div className='hi-reader'>
        <div className='person-img'></div>
        <div className='reader-content'>
          <h3>Hi Reader</h3>
          <p>Here's your news</p>
        </div>
      </div>
      <div className='view-toggle'>
        <h2>View Toggle</h2>
        <div className='toggle'>
          <NavLink exact to='/' activeClassName='active-list' className='nav'>
            <FontAwesomeIcon icon={faThLarge} />
          </NavLink>

          <NavLink to='/list' activeClassName='active-list' className='nav'>
            <FontAwesomeIcon icon={faList} />
          </NavLink>
        </div>
      </div>
      <div className='feedback'>
        <div className='inner-feedback'>
          <h3>Have a Feedbacks?</h3>
          <h4 onClick={openModal}>We're listening</h4>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className='modal-container'>
            <div className='modal-right-side'>
              <div className='modal-hi-header'>
                <div className='person-img'></div>
                <div className='reader-content'>
                  <h3>Hi Reader</h3>
                  <p>Here's your news</p>
                </div>
              </div>

              <div className='modal-inner-feedback'>
                <h3>Have a Feedbacks?</h3>
                <h4>We're listening</h4>
              </div>
            </div>
            <div className='modal-left-side'>
              <h3>Thank you so for taking the time!</h3>
              <p>please provide the below details</p>
              <form>
                <p>First Name:</p>
                <input type='text' className='input' placeholder='First Name' />
                <br />
                <p>Last Name:</p>
                <input type='text' className='input' placeholder='Last Name' />

                <p>Address:</p>
                <textarea cols='30' rows='10' className='txt-area'></textarea>
                <p>Country:</p>
                <input type='text' className='input' placeholder='India' />
                <br />
                <p>Email:</p>
                <input
                  type='text'
                  className='input'
                  placeholder='example@simple.com'
                />

                <p>Phone Number:</p>
                <input type='text' className='input' placeholder='123456789' />
                <br />
                <input
                  type='submit'
                  value='Submit Feedback'
                  className='submit'
                />
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
