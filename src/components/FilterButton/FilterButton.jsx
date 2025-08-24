import clsx from 'clsx';
import style from './FilterButton.module.css';

const  FilterButton = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(style.btn, {
        [style.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FilterButton;