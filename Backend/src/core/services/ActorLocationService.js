const actorLocationRepository = require('../../infrastructure/databases/ActorLocationRepository');
const scenePartRepository = require('../../infrastructure/databases/ScenePartRepository');

class ActorLocationService {
    async createActorLocation(sceneId, locationData) {
        const scene = await scenePartRepository.findById(sceneId);
        if (!scene) {
            throw new Error('Scene not found');
        }
        return await actorLocationRepository.create({ ...locationData, sceneId });
    }

    async getAllActorLocations() {
        return await actorLocationRepository.findAll();
    }

    async getActorLocationById(id) {
        return await actorLocationRepository.findById(id);
    }

    async updateActorLocation(id, updatedData) {
        return await actorLocationRepository.update(id, updatedData);
    }

    async deleteActorLocation(id) {
        return await actorLocationRepository.delete(id);
    }
}

module.exports = new ActorLocationService();
