const questionJSON = '/questions.json';

export default async function GetData() {
    try {
        const response = await fetch(questionJSON);
        if (!response.ok) {
            throw new Error("Can't access the JSON-file.")
        }
        return await response.json();
    }
    catch (error) {
        console.error("Can't access the data.", error)
        return [];
    }
};