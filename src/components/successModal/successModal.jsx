import './successModal.scss';

const SuccessModal = ({ text, isSuccessModalOpen, setIsSuccessModalOpen, hasTransitionedIn }) => {
  return (
      <div className={`modal-overlay ${hasTransitionedIn && 'in'} ${isSuccessModalOpen ? 'active' : ''}`}>
        <div className={`success-modal animated ${hasTransitionedIn && 'in'} ${isSuccessModalOpen && 'active'}`}>
          <p>{text}</p>
          <span onClick={() => setIsSuccessModalOpen(false)} className="modal-close-text">Close</span>
        </div>
      </div>
  );
};

export default SuccessModal;