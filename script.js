
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const addButton = document.getElementById("addButton");
    const nameTable = document.getElementById("nameTable");

    let nameList = []; 

    
    function renderTable() {
        nameTable.innerHTML = ""; 
        nameList.forEach((name, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index}</td>
                <td>${name}</td>
                <td>
                    <button class="btn btn-sm btn-update me-2" onclick="editName(${index})">Update</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteName(${index})">Delete</button>
                </td>
            `;
            nameTable.appendChild(row);
        });
    }

    
    addButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            nameList.push(name); 
            nameInput.value = ""; 
            renderTable(); 
        } else {
            alert("Please enter a name!");
        }
    });

    
    window.editName = (index) => {
        const newName = prompt("Enter the updated name:", nameList[index]);
        if (newName) {
            nameList[index] = newName.trim(); 
            renderTable(); 
        }
    };


    window.deleteName = (index) => {
        if (confirm("Are you sure you want to delete this name?")) {
            nameList.splice(index, 1); 
            renderTable(); 
        }
    };

    renderTable(); 
});
