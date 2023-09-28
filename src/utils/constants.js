import PropTypes from 'prop-types';

export const ingradientsTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired,
    fat: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    carbohydrates : PropTypes.number.isRequired,
    __v: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired;