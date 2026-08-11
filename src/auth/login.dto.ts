import { ApiProperty } from "@nestjs/swagger"

export class Login {

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
    
    @ApiProperty()
    public username: string

    @ApiProperty()
    public password: string

}