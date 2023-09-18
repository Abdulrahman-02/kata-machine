export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;
    while (left < right) {
        let middle = Math.floor((left + right / 2)
        if (haystack[middle] === needle) {
            return true;
        }else if (haystack[middle] > needle) {
            right = middle;
        }else {
            left = middle + 1;
        }
    }
    return false
}
