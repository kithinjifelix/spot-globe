"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const base_repository_1 = require("../common/base.repository");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const practices_1 = require("../../domain/practices");
let MechanismRepository = class MechanismRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
    }
    async getById(id) {
        const result = await this.model
            .findById(id)
            .populate(practices_1.Agency.name.toLowerCase())
            .populate('facilities')
            .exec();
        return result;
    }
    async getMechanisms(agencyId) {
        let results = [];
        if (agencyId) {
            results = await this.model
                .find({ agency: agencyId })
                .populate(practices_1.Agency.name.toLowerCase())
                .populate('facilities')
                .exec();
        }
        else {
            results = await this.model
                .find()
                .populate(practices_1.Agency.name.toLowerCase())
                .populate('facilities')
                .exec();
        }
        return results;
    }
};
MechanismRepository = __decorate([
    __param(0, mongoose_1.InjectModel(practices_1.Mechanism.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MechanismRepository);
exports.MechanismRepository = MechanismRepository;
//# sourceMappingURL=mechanism.repository.js.map