import '../css/styles.scss'
import img from '../assets/mononoke.jpg'

const imgComponent = () => {
    const elImg = new Image(1920, 1080)
    elImg.src = img
    return elImg
}

document.body.appendChild(imgComponent())