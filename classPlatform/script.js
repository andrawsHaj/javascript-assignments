

// part 1+2

class Course {
  constructor(title, instructor, maxStudents) {
    this.title = title;
    this.instructor = instructor;
    this.maxStudents = maxStudents;
    this.enrolledStudents = 0;
  }

  enrollStudent() {
    if (this.enrolledStudents < this.maxStudents) {
      this.enrolledStudents++;
    }
  }
}



// part 3

const jsCourse = new Course("JavaScript Basics", "Dania", 30);
const pythonCourse = new Course("Python Fundamentals", "Mohammad", 25);

console.log(jsCourse);
console.log(pythonCourse);


// part 4

jsCourse.enrollStudent();
jsCourse.enrollStudent();
jsCourse.enrollStudent();

pythonCourse.enrollStudent();

console.log(jsCourse.title, ":", jsCourse.enrolledStudents, "enrolled");
console.log(pythonCourse.title, ":", pythonCourse.enrolledStudents, "enrolled");