import { Repository } from "./repository.abstract"

export abstract class Service<E extends { id?: number }> {

    abstract getRepository(): Repository<E>

    public async getById(id: number) {
        return await this.getRepository().findByPk(id)
    }

    public async getList() {
        return await this.getRepository().findAll()
    }

    public async create(record: E) {
        return await this.getRepository().create(record)
    }

    public async update(id: number, record: E) {
        record.id = id
        return await this.getRepository().update(record)
    }

    public async remove(id: number) {
        return await this.getRepository().delete(id)
    }

}