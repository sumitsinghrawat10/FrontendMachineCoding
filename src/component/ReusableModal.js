import React from 'react';

const ReusableModal = ({ setOpen, children }) => {
  console.log(children)
  return (
    (
      <div className="main">
       
          <button className="modal-close" onClick={setOpen}>
            &times;
          </button>
          {children}
        </div>
    
    )
  );
};

export default ReusableModal;
