import style from "./burger-constructor-card.module.css";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "../../utils/type-hooks";
import { UPDATE_SORT_INGREDIENTS } from "../../services/actions/burger-constructor";
import { FC } from 'react';

interface IBurgerConstructorCard {
  children?: React.ReactNode;
  index: number;
}

interface IItemId {
  index: number;
}

const BurgerConstructorCard: FC<IBurgerConstructorCard> = ({ children, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingridient",
    drop(item: IItemId) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      
      dispatch({
        type: UPDATE_SORT_INGREDIENTS,
        dragIndex: Number(dragIndex),
        hoverIndex: Number(hoverIndex),
      });
      item.index = index;
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingridient",
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const classNameIsDragging = "mt-10";
  if (isDragging) {
    children = "";
  }

  const classNameIsHoverOnDropElement = style.isActive;

  dragRef(dropRef(ref));

  return (
    <div
      className={`m-0 p-0 ${isDragging && classNameIsDragging} ${
        isHover && classNameIsHoverOnDropElement
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default BurgerConstructorCard;
