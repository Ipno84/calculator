export default function calculateResult(operation: string): string | null {
    try {
        const result = eval(operation);
        if (result === undefined) return '';
        return String(result);
    } catch (error) {
        return null;
    }
}
