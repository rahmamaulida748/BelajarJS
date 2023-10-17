// console.log("Hello World")
// alert("Notifikasi")
// prompt("Pinjam seratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is not Easy"
// console.log(Promnet)

// let Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding is not Easy"
// console.log(Promnet)

// cont Promnet = "Coding is Easy"
// console.log(Promnet)
// cont Promnet = "Coding is not Easy"
// console.log(Promnet)

// let totalPoin = prompt ("Masukkan Poin Anda")
//     if(totalPoin > 100) {
//         document.write ("Congtulation");
//     }
//     else {
//         document.write("Thank You");
//     }


// 



// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function() {
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

function tambahTugas() {
    const taskText = document.getElementById("task").value;

    if (taskText.trim() === "") {
        return;
    }

    const taskList = document.getElementById("daftarTugas");

    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");
    taskSpan.classList.add("task-text");

    // Event listener untuk menandai/mencoret tugas
    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            taskSpan.style.textDecoration = "line-through";
        } else {
            taskSpan.style.textDecoration = "none";
        }
    });

    
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    document.getElementById("task").value = "";
}







  


