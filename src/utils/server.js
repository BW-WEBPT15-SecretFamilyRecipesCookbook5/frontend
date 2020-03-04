import { Server } from 'miragejs'

new Server({
    seeds(server) {
        server.db.loadData({
            recipes: [
                { recipe: 'mac and cheese' },
                { recipe: 'chocolate cake' }
            ]
        })
    }
})