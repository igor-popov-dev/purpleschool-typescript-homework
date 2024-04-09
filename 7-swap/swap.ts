// прошлое задание не понял, пропустил.(пробовал читать статью, которую скидывали в чате, 
// не разобрался, из-за этого встрял, но потом решил двигаться дальше по курсу и взять от него, что смогу)

const obj: Record<string, number> = {
    a: 1,
    b: 2,
    c: 3
};

function swapKeysAndValues<T>(obj: Record<string, T>): Record<string, string> {
    const result: Record<string, string> = {}
    for (let key in obj) {
        const value = obj.key;
        if (typeof value === 'string' || typeof value === 'number') {
            result[value.toString()] = key;
        }
    }
    return result;
}

function swapKeysAndValuesReduce<T>(obj: Record<string, T>): Record<string, string> {
    const entries = Object.entries(obj);
    const initValue: Record<string, string> = {}
    return entries.reduce((acc, [key, value]) => {
        if (typeof value === 'string' || typeof value === 'number') {
            acc[value.toString()] = key;
        }
        return acc;
    }, initValue);
}