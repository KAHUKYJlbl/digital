const CARD_HEIGHT = 525;
const CARD_GAP = 100;

export function getHeight (quantity: number = 1): number {
  if (quantity % 2) {
    console.log(Math.ceil(quantity / 2));
    console.log(Math.ceil(quantity / 2) * CARD_HEIGHT);
    console.log(Math.floor(quantity / 2));
    console.log(Math.floor(quantity / 2) * CARD_GAP);
    return ((Math.ceil(quantity / 2) * CARD_HEIGHT) + (Math.floor(quantity / 2) * CARD_GAP))
  }

  return ((CARD_HEIGHT * quantity / 2) + (CARD_GAP * quantity / 2) + (CARD_HEIGHT / 2))
}