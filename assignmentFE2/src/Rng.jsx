function RnGenerator() {
    var arrayOfIds = [];
    while (arrayOfIds.length !== 5)
    {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        if (!arrayOfIds.includes(randomNumber))
            {
                arrayOfIds.push(randomNumber)
            }
    }
    return arrayOfIds
}
export default RnGenerator