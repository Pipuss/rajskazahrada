const getMapMarkerSize = () => {
  if (window.screen.width < 768) {
    return [90, 68];
  }
  return [141, 106];
}

export {getMapMarkerSize};
