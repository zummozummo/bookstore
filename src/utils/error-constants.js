export default {
  E_INVALID_REQUEST_DATA: {
    code: 'E_INVALID_REQUEST_DATA',
    message: 'Bad request',
    responseCode: 400,
  },
  E_NO_CHANGES_MADE: {
    code: 'E_NO_CHANGES_MADE',
    message: "Please check if you've made the intended adjustment",
    responseCode: 400,
  },
  E_UNAUTHORIZED: {
    code: 'E_UNAUTHORIZED',
    message: 'You are unauthorized to access this area',
    responseCode: 401,
  },
  E_NO_AUTH_HEADER: {
    code: 'E_NO_AUTH_HEADER',
    message: 'Forbidden',
    responseCode: 403,
  },
  E_INVALID_AUTH_HEADER: {
    code: 'E_INVALID_AUTH_HEADER',
    message: 'Invalid auth header',
    responseCode: 400,
  },
  E_ACCESS_TOKEN_EXPIRED: {
    code: 'E_ACCESS_TOKEN_EXPIRED',
    message: 'Session expired',
    responseCode: 401,
  },
  E_INVALID_ACCESS_TOKEN: {
    code: 'E_INVALID_ACCESS_TOKEN',
    message: 'Invalid access token',
    responseCode: 401,
  },
  E_ACCESS_TOKEN_TAMPERED: {
    code: 'E_ACCESS_TOKEN_TAMPERED',
    message: 'Token tampered',
    responseCode: 401,
  },
  E_RESETPASSWORD: {
    code: 'E_RESETPASSWORD',
    message: 'Password reset required',
    responseCode: 401,
  },
  E_INVALID_CREDENTIALS: {
    code: 'E_INVALID_CREDENTIALS',
    message: 'Invalid login credentials',
    responseCode: 400,
  },
  E_USER_DEACTIVATED: {
    code: 'E_USER_DEACTIVATED',
    message: 'User is deactivated',
    responseCode: 400,
  },
  E_NOT_FOUND: {
    code: 'E_NOT_FOUND',
    message: 'Not found',
    responseCode: 404,
  },
  E_PASSWORD_RESET_REQUIRED: {
    code: 'E_PASSWORD_RESET_REQUIRED',
    message: 'Password reset required',
    responseCode: 401,
  },
  E_TOS_AGREEMENT_REQUIRED: {
    code: 'E_TOS_AGREEMENT_REQUIRED',
    message: 'Terms of service must be agreed',
    responseCode: 401,
  },
  E_INTERNAL_SERVER_ERROR: {
    code: 'E_INTERNAL_SERVER_ERROR',
    message: 'Some error occurred',
    responseCode: 500,
  },
  E_MODULE_NOT_ENABLED: {
    code: 'E_MODULE_NOT_ENABLED',
    message: 'Module not enabled',
    responseCode: 400,
  },
  E_USER_NOT_FOUND: {
    code: 'E_USER_NOT_FOUND',
    message: 'User not found',
    responseCode: 400,
  },
  E_PROGRAM_NOT_STARTED: {
    code: 'E_PROGRAM_NOT_STARTED',
    message: 'Program not started for this user',
    responseCode: 400,
  },
  E_COEXISTING_MEDICINE: {
    code: 'E_COEXISTING_MEDICINE',
    message: 'Bad request',
    responseCode: 400,
  },
  E_PROGRAM_UNAUTHORIZED: {
    code: 'E_PROGRAM_UNAUTHORIZED',
    message: "You're unauthorized to access this program",
    responseCode: 401,
  },
  E_PATIENT_TRANSFER_APP_NOT_RECONFIGURED: {
    code: 'E_PATIENT_TRANSFER_APP_NOT_RECONFIGURED',
    message: 'App reconfiguration not done after patient transfer complete.',
    responseCode: 400,
  },
  E_USER_NOT_SPECIFIED: {
    code: 'E_USER_NOT_SPECIFIED',
    message: 'Please provide a user type.',
    responseCode: 400,
  },
  E_CONFLICTIN_DATA: {
    code: 'E_CONFLICTIN_DATA',
    message: 'unique constraint voilation',
    responseCode: 409,
  },
  E_INVALID_CREDS: {
    code: 'E_INVALID_CREDS',
    message: 'Invalid credentails',
    responseCode: 401,
  },
};
