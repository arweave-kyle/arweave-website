import *  as React from "react"

function getImagePaths() {
  const images = []
  for (let i = 1; i <= 55; i++) {
    images.push(`/images/hexagonbg/${i}.png`)
  }
  return images
}

const HexagonBackground: React.FunctionComponent = () => {
  const imagePaths = getImagePaths()
  const renderGridItem = imagePaths.map((imagePath, index) => {
    const key = `${index}`
    return (
      <li key={key}>
        <div className="hexagon">
          <img src={imagePath} />
        </div>
      </li>
    )
  })

  return (
    <ul className="hexagonbg-grid clear">
      {renderGridItem}
    </ul>
  )
}

export default HexagonBackground