export const ERROR_MESSAGES = {
  SERVER_ERROR: "Hubo un error en el servidor, intentalo mas tarde!",
  INCOMPLETE_FIELDS: "Debes llenar todos los campos correctamente!",
  UNEXPECTED_ERROR: "Hubo un error inesperado, intentalo mas tarde!",
  PASSWORDS_DONT_MATCH: "Las contraseñas no coinciden!",
  BAD_EMAIL_OR_PASSWORD: "Usuario o contraseña incorrecta",
};

export const API_CONFIG = {
  URL: "http://localhost:3000/api",
};

export const ROUTES = {
  login: "/",
  login2: "/login",
  home: "/home",
  singup: "/signup",
  newBook: "/new",
  write: "/write",
  myBooks: "/mybooks",
  booksByCategory: "/booksbycategory",
  book: "/book",
};

export const STATUS_CODE = {
  OK: 200,
  created: 201,
  unauthorized: 401,
  server_error: 500,
  bad_request: 404,
};
