export const orderImages = (index: number, currentImage: number, isLastImage: boolean, indexLength: number) => {
  const isNextImage = currentImage - index == -1;
  const isCurrentImage = index == currentImage;
  const isPreviousImage = currentImage - index == 1;
  const nextIndexResetsIndex = isLastImage && index == 0;

  if (isCurrentImage) {
    return "order-2";
  } else if (isNextImage || nextIndexResetsIndex ) {
    return "order-3";
  } else if (isPreviousImage || index == indexLength - 1 && currentImage == 0) {
    return "order-1";
  } else {
    return "order-last"
  }
}
