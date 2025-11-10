
export function formatUSD(amount) {
    if (amount == null || isNaN(amount)) return "$0";

    const number = parseFloat(amount);

    const formatted = number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return `$${formatted}`;
}
