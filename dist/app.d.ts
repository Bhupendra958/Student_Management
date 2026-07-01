type students = {
    rollNo: number;
    name: string;
    marks: number;
};
declare let students: students[];
declare let roll: HTMLInputElement;
declare let studentName: HTMLInputElement;
declare let marks: HTMLInputElement;
declare let addBtn: HTMLButtonElement;
declare let froll: HTMLInputElement;
declare let findBtn: HTMLButtonElement;
declare let uroll: HTMLInputElement;
declare let uname: HTMLInputElement;
declare let umarks: HTMLInputElement;
declare let updateBtn: HTMLButtonElement;
declare let removeRoll: HTMLInputElement;
declare let removeBtn: HTMLButtonElement;
declare let showBtn: HTMLButtonElement;
declare let output: HTMLDivElement;
declare function addStudent(s: students): void;
declare function getinfo(rollNo: number): students | undefined;
declare function updateS(urollNo: number, uname: string, umarks: number): boolean;
declare function removeStudent(rollNo: number): boolean;
declare function showinfo(): void;
//# sourceMappingURL=app.d.ts.map