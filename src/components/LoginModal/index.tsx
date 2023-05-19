import ReactModal from 'react-modal';
import { IconWrapper, ModalContent, ModalOpen } from './Component';
import closeIcon from '../../assets/icons/close.svg';
import { Img } from '../../assets/styles/styles';

const LoginModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {
          position: 'fixed',
          background: 'rgba(0, 0, 0, 0.3)',
        },
        content: {
          margin: 'auto',
          width: '612px',
          height: '348px',
          background: 'var(--type-white)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
        },
      }}
    >
      <ModalOpen>
        <IconWrapper onClick={() => setModalOpen(false)}>
          <Img
            src={closeIcon}
            width="19px"
            height="19px"
            style={{ cursor: 'pointer' }}
          />
        </IconWrapper>
        <ModalContent setModalOpen={setModalOpen} />
      </ModalOpen>
    </ReactModal>
  );
};

export default LoginModal;
