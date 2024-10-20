function checkResults(students) {
    students.filter(student => student.marks > 90)
            .forEach(student => {
                console.log(`Congratulations ${student.name}! You have cleared the exam.`);
            });
}

const student = [
    { name: "Mithun", marks: 95 },
    { name: "Prabir", marks: 75 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    { name: "Farman", marks: 99 }
];

checkResults(student);
