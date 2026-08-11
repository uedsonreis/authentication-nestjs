import { Module } from '@nestjs/common'

import { RoleService } from './role.service'
import { RoleRepository } from './role.repository'
import { RoleController } from './role.controller'

@Module({
    controllers: [ RoleController ],
    providers: [ RoleRepository, RoleService ],
    exports: [ RoleService ]
})
export class RoleModule {}