

const Messages = () => {

fetch('http://localhost:3000/guests',{
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}).then(response => {
    return response.json()
})
    .then(data => console.log(data))
}

export default Messages;