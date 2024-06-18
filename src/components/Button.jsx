/* eslint-disable react/prop-types */


const Button = ({title, link, style}) => {
  return (
    <button className={`${style} bg-orange-600`}>
        <a href={link}>{title}</a>
    </button>
  )
}

export default Button