const questionJSON = '/questions.json'
function GetData() {
    fetch(questionJSON)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Can't access the JSON-file.")
            }
            return response.json();
        })
        .then((data) => 
            console.log(data))
        .catch((error) => 
            console.error("Can't access the data.", error))
}
export default GetData