export type TClosePopup = {
    closePopup: () => void;
};

export type TModal = TClosePopup & {
    children?: React.ReactNode;
  };

export type TIngradientObj = {
    readonly _id: string;
    readonly name: string;
    readonly type: string;
    readonly proteins: number;
    readonly fat: number;
    readonly carbohydrates: number;
    readonly calories: number;
    readonly price: number;
    readonly image: string;
    readonly image_mobile: string;
    readonly image_large: string;
    readonly __v: number;
  };