player.onChat("ovejas", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 1)
    agent.setItem(ACACIA_FENCE, 64, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 21)
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 1)
})
player.onItemInteracted(APPLE, function () {
    mobs.spawn(SHEEP, pos(0, 0, 0))
})
