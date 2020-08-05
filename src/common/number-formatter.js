export default function (number) {
    if (number) {
        return number.toLocaleString(undefined);
    }
    return number;
}
