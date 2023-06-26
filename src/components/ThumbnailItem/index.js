// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDeatials, updateImg, isActive} = props

  const {thumbnailUrl, thumbnailAltText, id} = imageDeatials
  const onButton = () => {
    updateImg(id)
  }

  const buttonStyle = isActive ? 'act-button' : 'button'
  return (
    <li className="list-img">
      <button className={buttonStyle} type="button" onClick={onButton}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="button-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
