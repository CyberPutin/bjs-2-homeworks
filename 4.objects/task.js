"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Alex", "male", 25);
const student2 = new Student("Jack", "male", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  } 
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  if(this.marks === undefined){ 
    this.marks = [...rest];
  } 
  else {
    this.marks.push(...rest);
  }
}

Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}