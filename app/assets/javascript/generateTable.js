const tableBody = document.querySelector('tbody');
const edit = '<button class="btn btn-danger deleteButton"> Delete </button>';


async function generateTable() {
    document.location.reload(true);
}

async function updateTable() {

    const databaseContent = await Macros.findAll({
        attributes: ['name', 'key']
    });

    const keybindsString = JSON.stringify(databaseContent);
    const keybindsObj = JSON.parse(keybindsString)

    for (let i = 0; i < keybindsObj.length; i++) {
    dataContent = keybindsObj[i];

    let line = document.createElement('tr');
    let nameSpace = document.createElement('td')
    let associatedKeySpace = document.createElement('td')
    let editSpace = document.createElement('td')

    let nameText = document.createTextNode(dataContent.name);
    let keyText = document.createTextNode(dataContent.key);
    editSpace.innerHTML = edit;

    nameSpace.appendChild(nameText);
    associatedKeySpace.appendChild(keyText);
    line.appendChild(nameSpace);
    line.appendChild(associatedKeySpace);
    line.appendChild(editSpace);

    tableBody.appendChild(line);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateTable();
});