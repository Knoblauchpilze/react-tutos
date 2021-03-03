
import {useState} from "react";
import '../styles/Footer.css';

function Footer({cart}) {
  const [inputValue, setInputValue] = useState('');

  function handleInput (e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("The e-mail you entered does not seem to be valid");
    }
  }

  return (
    <footer className="tjh_footer">
      <div className="tjh_footer_elem">
        For plant-lovers
      </div>
      <div className="tjh_footer_elem">register your e-mail:</div>
      <input
        placeholder = "Fill your e-mail address"
        onChange = {handleInput}
        value = {inputValue}
        onBlur = {handleBlur}
      />
    </footer>
  );
}

export default Footer
