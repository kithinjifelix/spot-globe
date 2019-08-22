"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    create(entity) {
        const newModel = new this.model(entity);
        return newModel.save();
    }
    async createBatch(entity) {
        await this.model.create(entity);
        return entity.length;
    }
    async update(entity) {
        const id = entity._id;
        delete entity._id;
        const result = await this.model.updateOne({ _id: id }, entity);
        entity._id = id;
        return entity;
    }
    async get(tid) {
        const result = await this.model.findById(tid).exec();
        if (result) {
            return result.toObject();
        }
        return null;
    }
    async getAll(criteria) {
        if (criteria) {
            return this.model.find(criteria).exec();
        }
        return this.model.find().exec();
    }
    async delete(tid) {
        await this.model.deleteOne({ _id: tid }).exec();
        return true;
    }
    async getCount() {
        return await this.model.estimatedDocumentCount({});
    }
    getModel() {
        return this.model;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map