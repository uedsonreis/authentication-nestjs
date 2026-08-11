import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common"
import { ApiBody, ApiCreatedResponse, ApiResponse } from "@nestjs/swagger"
import { AuthGuard } from "@nestjs/passport"

import { UserService } from "./user.service"
import { User, ResponseUserDoc, CreateUserDoc, UpdateUserDoc } from "./user.entity"

@Controller('/users')
export class UserController {

    constructor(private readonly service: UserService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiResponse({ type: ResponseUserDoc, isArray: true, description: 'The user list.' })
    public async index() {
        return await this.service.getList()
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiResponse({ type: ResponseUserDoc, description: 'The user data.' })
    public async get(@Param('id') id: string) {
        const result = await this.service.getById(Number(id))
        if (result) return result
        else throw new HttpException('User does not found!', HttpStatus.NOT_FOUND)
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiBody({ type: CreateUserDoc, description: "The user data to be stored." })
    @ApiCreatedResponse({ type: ResponseUserDoc, description: 'The saved user data.' })
    public async store(@Body() body: User) {
        if (!body.name || !body.username || !body.password) {
            throw new HttpException("'name', 'username' and 'password' are required to create a new user", HttpStatus.BAD_REQUEST)
        }

        const result = await this.service.create(body)
        
        if (result) return result
        else throw new HttpException('Username already exists!', HttpStatus.BAD_REQUEST)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBody({ type: UpdateUserDoc, description: "The user data to be changed." })
    @ApiResponse({ type: ResponseUserDoc, description: 'The saved user data.' })
    public async update(@Param('id') id: string, @Body() body: User) {
        const result = await this.service.update(Number(id), body)
        if (result) return result
        else throw new HttpException('User does not found!', HttpStatus.NOT_FOUND)
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiResponse({ type: Boolean, description: 'True if the user was deleted.' })
    public async remove(@Param('id') id: string) {
        return await this.service.remove(Number(id))
    }

}