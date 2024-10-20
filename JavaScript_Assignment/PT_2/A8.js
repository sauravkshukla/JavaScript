function daysUntilEvent(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    const timeDifference = event - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference >= 0 ? daysDifference : 0;
}

const eventDate = "2024-11-23";
console.log(`${daysUntilEvent(eventDate)}`);
