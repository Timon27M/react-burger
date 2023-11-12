import styles from "./profile-info.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "../../services/selectors";
import { useState, useEffect, useMemo, useRef, FormEvent } from "react";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updateUser } from "../../services/actions/current-user";
import { useForm } from "../../hooks/hooks";

function ProfileInfo() {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setInputValues({ ...currentUser, password: "" });
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);
  const onIconClick = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
    setDisabled(false);
  };

  const { inputValues, handleChange, setInputValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(evt: React.SyntheticEvent) {
    evt.preventDefault();
    dispatch(updateUser(inputValues));
  }

  function clickCancel(evt: React.SyntheticEvent) {
    evt.preventDefault();

    setInputValues({ ...currentUser, password: "" });
    setDisabled(true);
  }

  const buttonsActive = useMemo(() => {
    return (
      currentUser.name !== inputValues.name ||
      currentUser.email !== inputValues.email ||
      inputValues.password !== ""
    );
  }, [inputValues.name, inputValues.email, inputValues.password]);

  const buttonsBlockClassName = `mt-10 ${styles.buttons} ${
    buttonsActive === true ? styles.active : ""
  }`;

  return (
    <div className={`mt-30 ml-15 ${styles.profileInfo}`}>
      <form action="">
        <Input
          placeholder="Имя"
          ref={inputRef}
          disabled={disabled}
          icon={"EditIcon"}
          name={"name"}
          value={inputValues.name}
          onChange={handleChange}
          onIconClick={onIconClick}
        />
        <EmailInput
          extraClass="mt-6"
          name="email"
          value={inputValues.email}
          onChange={handleChange}
          isIcon={true}
        />
        <PasswordInput
          extraClass="mt-6"
          icon="EditIcon"
          name="password"
          value={inputValues.password}
          onChange={handleChange}
        />

        <div className={buttonsBlockClassName}>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            extraClass="ml-8"
            onClick={clickCancel}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileInfo;
