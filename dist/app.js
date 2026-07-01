"use strict";
let students = [];
//DOM(Document Object Model) Manipulation
let roll = document.getElementById("RollNo");
let studentName = document.getElementById("Name");
let marks = document.getElementById("Marks");
let addBtn = document.getElementById("addbtn");
let froll = document.getElementById("search");
let findBtn = document.getElementById("findbtn");
let uroll = document.getElementById("uRoll");
let uname = document.getElementById("uName");
let umarks = document.getElementById("uMarks");
let updateBtn = document.getElementById("updatebtn");
let removeRoll = document.getElementById("removeRoll");
let removeBtn = document.getElementById("removebtn");
let showBtn = document.getElementById("showbtn");
let output = document.getElementById("output");
// Add Student
function addStudent(s) {
    students.push(s);
    console.log("Student added:", s);
}
//find Student by Roll No
function getinfo(rollNo) {
    return students.find(s => s.rollNo === rollNo);
}
// Update Student
function updateS(urollNo, uname, umarks) {
    const student = students.find(s => s.rollNo === urollNo);
    if (student) {
        student.name = uname;
        student.marks = umarks;
        return true;
    }
    return false;
}
// Remove Student
function removeStudent(rollNo) {
    const studentIndex = students.findIndex(s => s.rollNo === rollNo);
    if (studentIndex === -1) {
        return false;
    }
    students.splice(studentIndex, 1);
    return true;
}
// Show All Students
function showinfo() {
    console.log("All Students:");
    students.forEach(s => {
        console.log(`Roll No: ${s.rollNo}, Name: ${s.name}, Marks: ${s.marks}`);
    });
    if (output) {
        output.innerHTML = students.map(s => `<div class="details">
                <p><strong>Roll No:</strong> ${s.rollNo}</p>
                <p><strong>Name:</strong> ${s.name}</p>
                <p><strong>Marks:</strong> ${s.marks}</p>
            </div>`).join('');
    }
    else {
        console.error("Output element not found");
    }
}
//Event Listeners
addBtn.addEventListener("click", () => {
    let s = {
        rollNo: Number(roll.value),
        name: studentName.value,
        marks: Number(marks.value)
    };
    addStudent(s);
    alert("Student added successfully!");
    roll.value = "";
    studentName.value = "";
    marks.value = "";
});
findBtn.addEventListener("click", () => {
    const student = getinfo(Number(froll.value));
    if (student) {
        alert(`Roll No: ${student.rollNo}\nName: ${student.name}\nMarks: ${student.marks}`);
    }
    else {
        alert("Student not found!");
    }
});
updateBtn.addEventListener("click", () => {
    const updated = updateS(Number(uroll.value), uname.value, Number(umarks.value));
    if (updated) {
        alert("Student updated successfully!");
        uroll.value = "";
        uname.value = "";
        umarks.value = "";
    }
    else {
        alert("Student not found!");
    }
});
removeBtn.addEventListener("click", () => {
    const removed = removeStudent(Number(removeRoll.value));
    if (removed) {
        alert("Student removed successfully!");
        removeRoll.value = "";
        showinfo();
    }
    else {
        alert("Student not found!");
    }
});
showBtn.addEventListener("click", () => {
    showinfo();
});
//# sourceMappingURL=app.js.map