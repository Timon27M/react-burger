import style from './burger-constructor-card.module.css';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { UPDATE_SORT_INGREDIENTS } from '../../services/actions/burger-constructor';
import PropTypes from "prop-types";

function BurgerConstructorCard({ children, index }) {
    const dispatch = useDispatch()
    const ref = useRef(null)

    const [{ isHover }, dropRef] = useDrop({
        accept: 'ingridient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(item) {
            const dragIndex = item.index
            const hoverIndex = index
            
            if ( dragIndex === hoverIndex ) {
                return
            }

            dispatch({
                type: UPDATE_SORT_INGREDIENTS,
                dragIndex: Number(dragIndex),
                hoverIndex: Number(hoverIndex),
            })
            item.index = index;
        }
    });

    const [{ isDragging }, dragRef] = useDrag({
        type: 'ingridient',
        item: () => {
            return { index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    const classNameIsDragging = 'mt-10';
    if (isDragging) {
        children = '';
    }

    const classNameIsHoverOnDropElement = style.isActive;

    dragRef(dropRef(ref));

    return (
        <div className={`m-0 p-0 ${ isDragging && classNameIsDragging} ${isHover && classNameIsHoverOnDropElement}`} ref={ref}>
            {children}
        </div>
    )
}

BurgerConstructorCard.propTypes = {
    children: PropTypes.element.isRequired,
    index: PropTypes.number.isRequired,
  };

export default BurgerConstructorCard;