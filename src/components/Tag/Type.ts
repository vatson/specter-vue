export enum Types {
  primary = 'label-primary',
  secondary = 'label-secondary',
  success = 'label-success',
  warning = 'label-warning',
  error = 'label-error',
}

export type Type = keyof typeof Types;