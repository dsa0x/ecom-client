export interface User {
  data: {
    token: string;
    _user: {
      isLoggedIn: boolean;
      email: string;
      firstName: string;
      lastName: string;
      role: string;
      username: string;
      verified: false;
    };
  };
}
