export default function multipleReplacer(s: string, r: GenericObject): string {
    const keys: string[] = Object.keys(r);
    const values: string[] = Object.values(r);
    keys.forEach((e: string, i: number) => {
        const pattern = '\\' + e;
        const regex = new RegExp(pattern, 'g');
        s = s.replace(regex, values[i]);
    });
    return s;
}
