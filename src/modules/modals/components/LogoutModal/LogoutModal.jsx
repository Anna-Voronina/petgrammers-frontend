import PropTypes from "prop-types";
import { Modal } from "../../../../shared/components/Modal/Modal";
import Button from "../../../../shared/components/Button/Button";
import { useNavigate } from "react-router";
import { ModalTitle, BtnContainer, Filling } from "./LogoutModal.styled";

export const LogoutModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    onClose();
    navigate("/");
  };
  return (
    <Modal onClose={onClose}>
      <Filling>
        <ModalTitle>Already leaving&#63;</ModalTitle>
        <BtnContainer>
          <Button onClick={onClose} text="Cancel" variant="cancel" />
          <Button
            onClick={handleYesClick}
            text="Yes"
            variant="logoutButton"
            icon="logout"
            iconPosition="right"
            iconVariant="transparent"
          />
        </BtnContainer>
      </Filling>
    </Modal>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};