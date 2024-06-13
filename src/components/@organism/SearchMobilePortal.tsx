// PortalModal.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/SearchMobilePortal.css';

const SearchModal = ({ isOpen, onClose, children }) => {
    const modalRoot = document.getElementById('modal-root');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className={`modal ${isOpen ? 'modal-open' : ''}`} >
            <div className="modal-content">
                <div className={'flex flex-row justify-between'}>
                    <div>Filter</div>
                    <button onClick={onClose}>Close</button>
                </div>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default SearchModal;
