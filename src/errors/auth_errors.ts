export type AuthErrorResponse = {
  type: 'email' | 'password' | 'both'
  message: string
}

export const auth_errors = new Map<string, AuthErrorResponse>([
  ['email must be an email', { type: 'email', message: 'Please, input a valid email' }],
  [
    'password must be longer than or equal to 5 characters',
    { type: 'password', message: 'Password must be longer than or equal to 5 characters' }
  ],
  [
    'duplicate key value violates unique constraint',
    { type: 'email', message: 'The user has an account already' }
  ],
  ['password should not be empty', { type: 'password', message: 'Please, input a password' }],
  ['Invalid credentials', { type: 'both', message: 'Invalid credentials' }],
  ['Bad Request Exception', { type: 'both', message: 'Please, specify the field' }]
])
