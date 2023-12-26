class Spaceship {
    static get deceleration_rate() {
        return 0.17
    }

    constructor(name,crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration * (1- Spaceship.deceleration_rate)
    }
}