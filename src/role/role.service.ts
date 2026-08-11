import { Injectable } from "@nestjs/common"

import { Role } from "./role.entity"
import { RoleRepository } from "./role.repository"
import { Service } from "src/abstractions/service.abstract"

@Injectable()
export class RoleService extends Service<Role> {

    constructor(
        private readonly repository: RoleRepository
    ) {
        super()
    }

    getRepository() {
        return this.repository
    }

}