import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { FC } from 'react';
import { TClosePopup } from "../../utils/types";

const IngredientPopup: FC<TClosePopup> = ({ closePopup }) => {
    return (
        <Modal closePopup={closePopup}>
            <IngredientDetails />
        </Modal>
    )
}

export default IngredientPopup