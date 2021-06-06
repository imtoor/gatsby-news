import './src/assets/lib/slick/slick.css';
import './src/assets/lib/slick/slick-theme.css';
import './src/styles/style.css';

const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}
export const onClientEntry = () => {
    window.onload = () => {
      addScript("https://code.jquery.com/jquery-3.4.1.min.js")
      addScript("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js")
      addScript("./src/assets/lib/easing/easing.min.js")
      addScript("./src/assets/lib/slick/slick.min.js")
      addScript("./src/assets/js/main.js")
    }
  }