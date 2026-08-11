import { ApiProperty } from "@nestjs/swagger"

export class Role {

    public id?: number
    public name: string = ''
    public description?: string

}

export class ResponseRoleDoc {
    @ApiProperty()
    public id: number = 0

    @ApiProperty()
    public name: string = ''

    @ApiProperty()
    public description?: string
}

export class CreateRoleDoc {
    @ApiProperty()
    public name: string = ''

    @ApiProperty()
    public description?: string
}

export class UpdateRoleDoc {
    @ApiProperty()
    public description?: string
}