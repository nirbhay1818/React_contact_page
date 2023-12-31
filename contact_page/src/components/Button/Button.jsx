import styles from './Button.module.css';

const Button = ({isOutline,icon,text}) => {

  // const {isOutline,icon,text}=props; //Also do it with this by passing props 
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button;
