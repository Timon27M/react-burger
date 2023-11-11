import { useState } from 'react';

type IInputValue = {
  [name: string]: string;
}

// interface IAtributes {
//   value: string;
//   name: string;
// }

export function useForm(values: IInputValue) {
    const [inputValues, setInputValues] = useState(values);

  
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const {value, name} = evt.target;
      setInputValues({...inputValues, [name]: value});
    };
    
    return {inputValues, handleChange, setInputValues};
  }
