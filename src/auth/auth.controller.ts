import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // use dependency injection để inject AuthService vào controller.
  // -> có thể sử dụng các hàm của AuthService
  constructor(private authService: AuthService) {}

  //some request from client
  @Post('/register')
  register() {
    return this.authService.register();
  }

  // POST: .../auth/login
  @Post('/login')
  login() {
    return this.authService.login();
  }
}
