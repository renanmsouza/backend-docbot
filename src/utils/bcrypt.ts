import * as bcrypt from 'bcrypt';

// Encripta uma String Qualquer
export function encodeString(rawString: string): string {
    const SALT = bcrypt.genSaltSync(20);
    return  bcrypt.hashSync(rawString, SALT);
}

export function compareHashStrings(rawString: string, hashString: string): boolean {
    return bcrypt.compareSync(rawString, hashString);
}