type students = {
    rollNo: number;
    name: string;
    marks: number;
};
let students: students[] = [];
//DOM(Document Object Model) Manipulation
let roll = document.getElementById("RollNo") as HTMLInputElement;
let studentName = document.getElementById("Name") as HTMLInputElement;
let marks = document.getElementById("Marks") as HTMLInputElement;
let addBtn = document.getElementById("addbtn") as HTMLButtonElement;

let froll = document.getElementById("search") as HTMLInputElement;
let findBtn = document.getElementById("findbtn") as HTMLButtonElement;  

let uroll = document.getElementById("uRoll") as HTMLInputElement;
let uname = document.getElementById("uName") as HTMLInputElement;
let umarks = document.getElementById("uMarks") as HTMLInputElement;
let updateBtn = document.getElementById("updatebtn") as HTMLButtonElement;

let removeRoll = document.getElementById("removeRoll") as HTMLInputElement;
let removeBtn = document.getElementById("removebtn") as HTMLButtonElement;

let showBtn = document.getElementById("showbtn") as HTMLButtonElement;
let output = document.getElementById("output") as HTMLDivElement;

// Add Student
function addStudent(s: students):void {
    students.push(s);
    console.log("Student added:", s);
}

//find Student by Roll No
function getinfo(rollNo: number): students | undefined {
   return students.find(s =>
    s.rollNo === rollNo);
}

// Update Student
function updateS(urollNo: number, uname: string, umarks: number): boolean {
    const student = students.find(s => 
        s.rollNo === urollNo); 
    if (student) {
        student.name = uname;
        student.marks = umarks;
        return true;
    }
    return false;
}

// Remove Student
function removeStudent(rollNo: number): boolean {
    const studentIndex = students.findIndex(s => s.rollNo === rollNo);
    if (studentIndex === -1) {
        return false;
    }

    students.splice(studentIndex, 1);
    return true;
}

// Show All Students
function showinfo(): void {
    console.log("All Students:");
    students.forEach(s => {
        console.log(`Roll No: ${s.rollNo}, Name: ${s.name}, Marks: ${s.marks}`);
    }); 
    if (output) {
        output.innerHTML = students.map(s =>
            `<div class="details">
                <p><strong>Roll No:</strong> ${s.rollNo}</p>
                <p><strong>Name:</strong> ${s.name}</p>
                <p><strong>Marks:</strong> ${s.marks}</p>
            </div>`).join('');
    }else {
        console.error("Output element not found");
    }   

}
//Event Listeners
addBtn.addEventListener("click", () => {
    let s:students={
        rollNo:Number(roll.value),
        name:studentName.value,
        marks:Number(marks.value)
    }
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
    } else {
        alert("Student not found!");
    }
});

updateBtn.addEventListener("click", () => {
    const updated = updateS(
        Number(uroll.value),
        uname.value,
        Number(umarks.value)
    );

    if (updated) {
        alert("Student updated successfully!");
        uroll.value = "";
        uname.value = "";
        umarks.value = "";
    } else {
        alert("Student not found!");
    }
});

removeBtn.addEventListener("click", () => {
    const removed = removeStudent(Number(removeRoll.value));

    if (removed) {
        alert("Student removed successfully!");
        removeRoll.value = "";
        showinfo();
    } else {
        alert("Student not found!");
    }
});

showBtn.addEventListener("click", () => {
    showinfo();
});
