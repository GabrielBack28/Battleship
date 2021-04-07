import { IconType } from 'react-icons'

type TbuttonType = 'success' | 'info' | 'warning' | 'danger';

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  buttonType?: TbuttonType;
  Icon?: IconType;
}

const Button = (props: IProps) => {
  const { disabled, label, buttonType, Icon } = props;
  const getButtonColor = () => {
    const buttonClasses: {
      [key: string]: string;
    } = {
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      danger: 'red',
    };

    return buttonType ? buttonClasses[buttonType] : buttonClasses['success'];
  };

  return (
    <button
      {...props}
      className={`px-3.5 ${props.className} inline-flex items-center focus:ring-2 focus:outline-none ring-offset-1 focus:ring-${getButtonColor()}-300 rounded py-2.5 font-medium text-sm text-white transition-all duration-300 ${
        !disabled
        ? `bg-${getButtonColor()}-500 hover:bg-${getButtonColor()}-600`
        : `bg-${getButtonColor()}-400 cursor-not-allowed`}`}
  > 
    <>
      {Icon ? (<Icon className="w-4 h-4 mr-2" />) : (<></>)}
      <span>
        {label}
      </span>
    </>
  </button>
  )
}

export default Button;