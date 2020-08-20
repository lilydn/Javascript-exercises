// Create a method called “assignStudent” for your school object that you created in the last exercise
// Assign all of the students to the first available teacher who teaches that subject and who is not in full capacity. 
// If all of the teachers are in full log to the console “Sorry, no available teachers left”

const school = {
    teachers: [
        {
            name: 'Shani',
            subjects: ['Java','Javascript','C++','Data Structures','Baking'],
            students: [],
            classroomCapacityLeft: 1,
        },
        {
            name: 'Pini',
            subjects: ['Javascript','CSS','React','Finnish Language','Knitting'],
            students: [],
            classroomCapacityLeft: 3,
        },
    ],  
    students: [
        {
            name: 'Lily',
            age: 27,
        },
        {
            name: 'Gily',
            age: 25,
        },
        {
            name: 'Mily',
            age: 36,
        },
        {
            name: 'Tily',
            age: 30,
        },
        {
            name: 'Miki',
            age: 31,
        },
        {
            name: 'Riki',
            age: 22,
        },
        {
            name: 'Yosi',
            age: 27,
        },
    ],
    assignStudent: function(student, subject) {
        const studentObj = school.students.find(el => el.name === student);
        if(studentObj) {  
            const teacherObj = school.teachers.find(el => el.subjects.includes(subject) && el.classroomCapacityLeft > 0);
            teacherObj 
            ? teacherObj.students.push(studentObj) && teacherObj.classroomCapacityLeft--
            : console.log(`Sorry, no available teachers left`);
        }
        else console.log(`There is no student called ${student}`);
    }
};






/*
school.assignStudent('Lily', 'React');
school.assignStudent('Miki', 'Baking');
school.assignStudent('Tilly', 'CSS'); //no such name
school.assignStudent('Yosi', 'Javascript');
school.assignStudent('Gily', 'Data Structures'); //no available teachers
school.assignStudent('Gily', 'Javascript');
*/




