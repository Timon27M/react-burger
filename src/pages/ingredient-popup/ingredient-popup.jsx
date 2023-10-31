import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import PropTypes from "prop-types";

function IngredientPopup({ closePopup }) {
    return (
        <Modal closePopup={closePopup}>
            <IngredientDetails />
        </Modal>
    )
}

IngredientPopup.propTypes = {
    closePopup: PropTypes.func.isRequired
  }

export default IngredientPopup