export enum Types {
  primary = 'btn-primary',
  link = 'btn-link',
  success = 'btn-success',
  error = 'btn-error',
  clear = 'btn-clear',
}

export type Type = keyof typeof Types;
