import PropTypes from 'prop-types';
import styles from './Input.module.css'
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} className={styles.input} type={type} onChange={onChange} value={value} onBlur={onBlur} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}


Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func, 
  onBlur: PropTypes.func, 
};

export default Input
