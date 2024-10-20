const student = {
    name: "Saurav",
    age: 22,
    grade: "A"
  };
  
  // Method to update the student's grade
  function updateGrade(newGrade) {
    student.grade = newGrade;
  }
  
  updateGrade("B");
  console.log(student);
  