/*
Create an object called school.
School has two properties teachers and students.
Each teacher has the following:
1. A name
2. An array of subjects he/she can teach.
3. An array of students
4. An integer of how much capacity is left in his/her classroom.
Each student has at least a name and age.
The object should include at least 2 teachers and 4 students
*/


const school = {
    teachers: [
        {
            name: 'Shani',
            subjects: ['Java','Javascript','C++','Data Structures','Baking'],
            students: [],
            classroomCapacityLeft: 8,
        },
        {
            name: 'Pini',
            subjects: ['Javascript','CSS','React','Finnish Language','Knitting'],
            students: [],
            classroomCapacityLeft: 6,
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
    ],
};


