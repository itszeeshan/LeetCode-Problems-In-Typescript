function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;
    hand.sort((a, b) => a - b);
    const cardCount = new Map<number, number>();
    for (const card of hand) {
        cardCount.set(card, (cardCount.get(card) || 0) + 1);
    }
    for (const card of hand) {
        if (cardCount.get(card)! > 0) {
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i;
                if (cardCount.get(currentCard)! > 0) {
                    cardCount.set(currentCard, cardCount.get(currentCard)! - 1);
                } else {
                    return false; 
                }
            }
        }
    }
    return true;
}
const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
const groupSize = 3;
console.log(isNStraightHand(hand, groupSize)); // Output: true
