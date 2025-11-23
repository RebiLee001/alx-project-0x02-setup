import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  let sizeClass = '';
  switch (size) {
    case 'small':
      sizeClass = 'px-2 py-1 text-sm';
      break;
    case 'medium':
      sizeClass = 'px-4 py-2 text-base';
      break;
    case 'large':
      sizeClass = 'px-6 py-3 text-lg';
      break;
  }

  return (
    <button
      className={`${sizeClass} bg-blue-600 text-white ${shape} hover:bg-blue-700 transition`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
