export function getKey(value: string | string[]): string {
  return value instanceof Array ? value[0] : value;
}

/**
 * isEmpty('');
 *
 * => true
 * @param value
 */
export function isEmpty(value: string | Array<any>) {
  return !value || value.length === 0;
}

export function isString(data: any) {
  return data !== null && typeof data === 'string';
}

export type StringSensitivity = 'base' | 'accent' | 'case' | 'variant';

export function IsEqualsIgnoringCase(str1: string, str2: string, sensitivity?: StringSensitivity) {
  sensitivity = !sensitivity ? 'base' : sensitivity;
  return str1.localeCompare(str2, undefined, { sensitivity: sensitivity }) === 0;
}

export function randomString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function compare(a: number | string | null, b: number | string | null) {
  if (a! && b! && typeof a !== typeof b) throw new Error('Invalid comparation types');

  if (typeof a === 'number' && typeof b === 'number') return a - b;
  a = a ? a : '';
  b = b ? b : '';
  return a.toString().localeCompare(b.toString());
}
