export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;
    while (left < right) {
        const middle = Math.floor((left + (right-left)) / 2)
        const value = haystack[middle];
        if (value === needle) {
            return true;
        }else if (value > needle) {
            right = middle;
        }else {
            left = middle + 1;
        }
    }
    return false
}