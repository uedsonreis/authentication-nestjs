import { Injectable } from "@nestjs/common"

import { User } from "./user.entity"
import { Repository } from "../abstractions/repository.abstract"

@Injectable()
export class UserRepository extends Repository<User> {

    constructor() {
        super(
            [{ id: 1, name: 'Uedson Reis', username: 'uedsonreis', password: '123456' } as User]
        )
    }

    public async findByUsername(username: string): Promise<User | null> {
        return new Promise((resolve, reject) => {
            const record = this.document.find(user => user.username === username)
            resolve(record ? record : null)
        })
    }
    
    public async create(record: User): Promise<User | null> {
        const alreadyExist = await this.findByUsername(record.username)
        
        return new Promise((resolve, reject) => {
            if (alreadyExist) {
                resolve(null)
            } else {
                const last = this.document[this.document.length-1]
                record.id = last.id! + 1
                this.document.push(record)
                resolve(record)
            }
        })
    }
    
    public async update(record: User): Promise<User | null> {
        const finded = await this.findByPk(record.id!)

        return new Promise((resolve, reject) => {
            if (finded) {
                if (record.name) {
                    finded.name = record.name
                }
                if (record.password) {
                    finded.password = record.password
                }
                if (record.roles) {
                    finded.roles = record.roles
                }
            }
            resolve(finded)
        })
    }

}