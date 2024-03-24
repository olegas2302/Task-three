function isCheckingBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let bracket of str) {
        if (bracket in brackets) {
            stack.push(bracket);
        } else {
            const last = stack.pop();
            if (brackets[last] !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isCheckingBrackets("(]")); 
console.log(isCheckingBrackets("([)]")); 
console.log(isCheckingBrackets("{[]}")); 