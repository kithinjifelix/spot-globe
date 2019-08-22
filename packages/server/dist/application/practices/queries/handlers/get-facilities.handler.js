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
const cqrs_1 = require("@nestjs/cqrs");
const get_facilities_query_1 = require("../get-facilities.query");
const common_1 = require("@nestjs/common");
let GetFacilitiesHandler = class GetFacilitiesHandler {
    constructor(facilityRepository) {
        this.facilityRepository = facilityRepository;
    }
    async execute(query) {
        const results = await this.facilityRepository.getAll();
        return results;
    }
};
GetFacilitiesHandler = __decorate([
    cqrs_1.QueryHandler(get_facilities_query_1.GetFacilitiesQuery),
    __param(0, common_1.Inject('IFacilityRepository')),
    __metadata("design:paramtypes", [Object])
], GetFacilitiesHandler);
exports.GetFacilitiesHandler = GetFacilitiesHandler;
//# sourceMappingURL=get-facilities.handler.js.map