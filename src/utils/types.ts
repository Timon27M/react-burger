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

  export type TServerResponse<T> = {
    success: boolean;
  } & T;
  
  export type TOrderObj = {
    number: number
  }
  
  export type TUserObj = {
    email: string;
    name: string;
  }
  
  export type TIngredients = TServerResponse<TIngradientObj>
  
  
  export type TOrderAdd = TServerResponse<{
    name: string;
    order: TOrderObj;
    success: boolean;
  }>
  
  export type TUserCreate = TServerResponse<{
    email: string;
    password: string;
    name: string;
  }>
  
  export type TUserLogin = TServerResponse<{
    email: string;
    password: string;
  }> 
  
  export type TUpdateToken = TServerResponse<{
    token: string;
  }>
  
  export type TMessageResponse = TServerResponse<{
    message: string;
  }>
  
  export type TGetUser = TServerResponse<{
    user: TUserObj;
  }>