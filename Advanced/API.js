let setStudentAgeApi = (student, age) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
 }
 
 let student = { name: "Eric" };
 
 setStudentAgeApi(student, 20)
     .then((student) => {
         console.log("Student age set successfully:", student);
     })
     .catch((error) => {
         console.error("Error:", error);
     });
 
 setStudentAgeApi(student, -5)
     .then((student) => {
         console.log("Student age set successfully:", student);
     })
     .catch((error) => {
         console.error("Error:", error);
     });
 