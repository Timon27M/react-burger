import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

function IngredientPopup({ closePopup }) {
    return (
        <Modal closePopup={closePopup}>
            <IngredientDetails />
        </Modal>
    )
}

export default IngredientPopup