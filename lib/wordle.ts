
import "server-only";

export function evaluate(guess: string, possible_answer: string): string[] {
    const result = ['0', '0', '0', '0', '0']
    const used_answer = [false, false, false, false, false]

    for (let i = 0; i < 5; i++) {
        if (guess[i] === possible_answer[i]) {
            result[i] = "G"
            used_answer[i] = true
        }
    }

    for (let i = 0; i < 5; i++) {
        if (result[i] === '0') {
            for (let j = 0; j < 5; j++) {
                if (!used_answer[j] && guess[i] === possible_answer[j]) {
                    result[i] = 'Y'
                    used_answer[j] = true
                    break
                }
            }
        }
    }

    return result
}
