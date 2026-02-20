export function formatMoney(AmountCents) {
    return `$${(AmountCents / 100).toFixed(2)}`;
}