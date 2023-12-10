import { FC } from "react";
import FeedDetails from "../../components/app/feed-details/feed-details";
import Modal from "../../components/modal/modal";

type TFeedPopup = {
    closePopup: () => void;
};

const FeedPopup: FC<TFeedPopup> = ({ closePopup }) => {
    return (
        <Modal closePopup={closePopup}>
            <FeedDetails />
        </Modal>
    );
};

export default FeedPopup;
