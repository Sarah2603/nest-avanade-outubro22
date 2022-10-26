import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async authLogin(login, password) {
        console.log(' No Service - Login', login);
        console.log('No Service - Senha', password);
        return {login, password};
    }
}