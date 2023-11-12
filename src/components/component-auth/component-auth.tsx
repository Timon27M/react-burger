import styles from "./component-auth.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from 'react';

interface IComponentAuth {
  title: string;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  formName: string;
  textButton: string;
}

const ComponentAuth: FC<IComponentAuth> = ({
  title,
  handleSubmit,
  children,
  formName,
  textButton,
}) => {
  return (
    <div className={`mt-25 ${styles.content}`}>
      <h2 className={`text text_type_main-medium mb-6`}>{title}</h2>
      <form name={formName} id={formName} onSubmit={handleSubmit}>
        {children}
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
        >
          {textButton}
        </Button>
      </form>
    </div>
  );
}

export default ComponentAuth;
