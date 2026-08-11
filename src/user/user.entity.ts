import { ApiProperty } from "@nestjs/swagger"

export class User {

    public id?: number
    public name: string = ''
    public username: string = ''
    public roles: string[] = []
    public password?: string

}

export class AuthenticatedUser extends User {
    @ApiProperty()
    public token: string = ''
}

export class ResponseUserDoc extends User {
    @ApiProperty()
    public id: number = 0

    @ApiProperty()
    public name: string = ''

    @ApiProperty()
    public username: string = ''

    @ApiProperty()
    public roles: string[] = []
}

export class CreateUserDoc extends User {
    @ApiProperty()
    public name: string = ''

    @ApiProperty()
    public username: string = ''

    @ApiProperty()
    public password: string = ''
}

export class UpdateUserDoc extends User {
    @ApiProperty()
    public name: string = ''

    @ApiProperty()
    public password: string = ''

    @ApiProperty()
    public roles: string[] = []
}