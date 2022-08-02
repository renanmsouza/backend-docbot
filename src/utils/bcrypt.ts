import * as bcrypt from 'bcrypt';

// Encripta uma String Qualquer
export function encodeString(rawString: string): string {
    const SALT = bcrypt.genSaltSync();
    return  bcrypt.hashSync(rawString, SALT);
}

export function comparaHashStrings(rawString: string, hashString: string): boolean {
    return bcrypt.compareSync(rawString, hashString);
}