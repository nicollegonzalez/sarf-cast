import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_AUTHSERVICE_BASE_URL,
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, stanceInput,favoriteSurfSpotInput,favoriteSurfBoardShapeInput,favoriteSurferInput) => {
    return this.service.post('/auth/signup', {username:username, password:password, stanceInput:stanceInput, favoriteSurfSpotInput:favoriteSurfSpotInput,favoriteSurfBoardShapeInput:favoriteSurfBoardShapeInput, favoriteSurferInput: favoriteSurferInput })
    .then(response => response.data)
  }

  login = (username, password) =>{
    return this.service.post('/auth/login', {username, password})
    .then(response => response.data)
  }

  currentUser = () =>{
    return this.service.get('/auth/getcurrentuser')
    .then(response => response.data)
  }


  logout = () =>{
    return this.service.post('/auth/logout', {})
    .then(response => response.data)
  }


}

export default AuthService;