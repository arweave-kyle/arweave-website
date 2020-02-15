import *  as React from "react"

function getImagePaths() {
  const images = []
  for (let i = 1; i <= 161; i++) {
    images.push(`/images/hexagonbg/${i}.png`)
  }
  return images
}

const HexagonBackground: React.FunctionComponent = () => {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    // Fade out while scrolling
    window.onscroll = () => {
      // const newScrollHeight = Math.ceil(window.scrollY);
      // const newOpacity = Math.max(1 - newScrollHeight / 1500, 0).toFixed(2)
      // const newOpacityValue = parseFloat(newOpacity);
      // setOpacity(newOpacityValue)
    }
  }, []);

  const imagePaths = getImagePaths()
  const renderGridItem = imagePaths.map((imagePath, index) => {
    const key = `${index}`
    return (
      <li key={key}>
        <div className="hexagon">
          <img className={`tile-${index}`} src={imagePath} />
        </div>
      </li>
    )
  })

  return (
    <ul className="hexagonbg-grid clear" style={{ opacity }}>
      {renderGridItem}
    </ul>
  )
}

export default HexagonBackground