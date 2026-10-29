
function showStudent(name, age) {
    return "<h2>showStudent() Function</h2>" +
        "Student Name: " + name + "<br>" +
        "Student Age: " + age + "<br>";
}



function getGrade(marks) {
    let grade;

    if (marks >= 80) {
        grade = "A+";
    } else if (marks >= 70) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else {
        grade = "F";
    }

    return grade;
}


function showStudentInfo(name, age, cgpa, status, marks, grade, studentNames) {

    
    let courses = [
        "Web Technology",
        "OOP",
        "Database"
    ];

    let result = "";

   
    result += "<h2>Student Information</h2>" +
        "Name: " + name + " (" + typeof name + ")<br>" +
        "Age: " + age + " (" + typeof age + ")<br>" +
        "CGPA: " + cgpa + " (" + typeof cgpa + ")<br>" +
        "Status: " + (status ? "Active" : "Inactive") + " (" + typeof status + ")<br>" +
        "Marks: " + marks + " (" + typeof marks + ")<br>" +
        "Grade: " + grade + " (" + typeof grade + ")<br>";

    
    result += "<h2>Courses</h2>";
    for (let i = 0; i < courses.length; i++) {
        result += (i + 1) + ". " + courses[i] + "<br>";
    }

    
    result += showStudent(name, age);

    
    result += "<h2>All Student Names</h2>";
    for (let i = 0; i < studentNames.length; i++) {
        result += (i + 1) + ". " + studentNames[i] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}




document.addEventListener("submit", function (event) {

    event.preventDefault();

    
    let name =
        document.getElementById("name").value;

    
    let age =
        parseInt(document.getElementById("age").value);

    
    let cgpa =
        parseFloat(document.getElementById("cgpa").value);

    
    let status =
        document.querySelector(
            'input[name="status"]:checked'
        ).value === "true";

    
    let marks =
        parseInt(document.getElementById("marks").value);

    
    let grade = getGrade(marks);

    
    let studentNames = [
        document.getElementById("student1").value,
        document.getElementById("student2").value,
        document.getElementById("student3").value
    ];


    showStudentInfo(name, age, cgpa, status, marks, grade, studentNames);

});
