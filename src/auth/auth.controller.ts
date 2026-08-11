import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger'

import { Login } from './login.dto'
import { AuthService } from './auth.service'
import { AuthenticatedUser } from 'src/user/user.entity'

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService) {}

    @Post('login')
    @ApiBody({ type: Login, description: "The user data to be stored." })
    @ApiCreatedResponse({ type: AuthenticatedUser, description: "The logged user with a 'token' property." })
    public async login(@Body() { username, password }: Login): Promise<AuthenticatedUser> {
        return await this.service.signIn(username, password)
    }

}