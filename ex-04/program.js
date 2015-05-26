function getShortMessages(messages) {
    return messages
        .filter(function (message) {
            return message.message.length < 50;
        })
        .map(function (item) {
            return item.message;
        });
}

module.exports = getShortMessages;