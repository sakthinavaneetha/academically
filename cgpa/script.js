function addRow() {
    const table = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = '<input type="text" name="courseCode">';
    cell2.innerHTML = '<input type="number" name="creditsEarned">';
    cell3.innerHTML = `<select name="grade">
                        <option value="10">A+</option>
                        <option value="9">A</option>
                        <option value="8">B+</option>
                        <option value="7">B</option>
                        <option value="6">C+</option>
                        <option value="5">C</option>
                        <option value="4">D</option>
                        <option value="0">F</option>
                      </select>`;
}

function calculateCGPA() {
    const rows = document.getElementById('courseTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < rows.length; i++) {
        const credits = parseFloat(rows[i].getElementsByTagName('input')[1].value);
        const grade = parseFloat(rows[i].getElementsByTagName('select')[0].value);

        totalCredits += credits;
        totalPoints += credits * grade;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('cgpaResult').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;

    if (cgpa >= 8.5) {
        document.getElementById('domainSelection').style.display = 'block';
        document.getElementById('improvementSuggestions').style.display = 'none';
    } else {
        document.getElementById('domainSelection').style.display = 'none';
        document.getElementById('honorsOptions').style.display = 'none';
        displayImprovementSuggestions();
    }
}

function displayHonorsSuggestions() {
    const domain = document.getElementById('domain').value;
    const honorsList = document.getElementById('honorsList');

    let honorsOptions = {
        dataScience: [
            'Data Science Honors',
            'Big Data Analytics Honors'
        ],
        ai: [
            'Artificial Intelligence Honors',
            'Machine Learning Honors'
        ],
        cybersecurity: [
            'Cybersecurity Honors',
            'Network Security Honors'
        ],
        machineLearning: [
            'Machine Learning Honors',
            'Deep Learning Honors'
        ],
        fullstack: [
            'Fullstack Development Honors',
            'Frontend and Backend Mastery Honors'
        ],
        cloudComputing: [
            'Cloud Computing Honors',
            'AWS Certified Solutions Architect Honors'
        ]
    };

    honorsList.innerHTML = ''; // Clear previous honors suggestions

    if (honorsOptions[domain]) {
        honorsOptions[domain].forEach(honor => {
            const li = document.createElement('li');
            li.textContent = honor;
            honorsList.appendChild(li);
        });
        document.getElementById('honorsOptions').style.display = 'block';
    } else {
        document.getElementById('honorsOptions').style.display = 'none';
    }
}

function displayImprovementSuggestions() {
    const improvementList = document.getElementById('improvementList');
    const futureIdeas = document.getElementById('futureIdeas');

    const suggestions = [
        'Seek help from professors or tutors for difficult subjects.',
        'Develop better study habits and time management skills.',
        'Join study groups for collaborative learning.',
        'Utilize online resources and textbooks to reinforce understanding.',
        'Attend workshops or extra classes if available.'
    ];

    const ideas = [
        'Consider internships or projects to gain practical experience.',
        'Explore additional courses or certifications to boost your skills.',
        'Engage in extracurricular activities related to your field of interest.',
        'Work on personal projects or contribute to open-source projects.',
        'Set specific goals and create a plan to achieve them.'
    ];

    improvementList.innerHTML = ''; // Clear previous improvement suggestions
    futureIdeas.innerHTML = ''; // Clear previous future ideas

    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        improvementList.appendChild(li);
    });

    ideas.forEach(idea => {
        const li = document.createElement('li');
        li.textContent = idea;
        futureIdeas.appendChild(li);
    });

    document.getElementById('improvementSuggestions').style.display = 'block';
}
