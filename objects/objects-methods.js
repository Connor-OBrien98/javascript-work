let restaurant = {
    name: 'Nandos',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        if (partySize <= seatsLeft) {
            this.guestCount += partySize
        }
    },
    removeParty: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        if (partySize <= seatsLeft) {
            this.guestCount -= partySize
        }
    }
}

restaurant.seatParty(25)
console.log(restaurant)

