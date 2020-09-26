console.log('This is CV Screener')

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name: 'Ram Kumar',
        age: 20,
        city: 'Shimla',
        language: 'python',
        framework: 'flask',
        image: "https://randomuser.me/api/portraits/men/76.jpg"
    },

    {
        name: 'Neha Sharma',
        age: 20,
        city: 'Bangalore',
        language: 'Javascript',
        framework: 'ReactJS',
        image: "https://randomuser.me/api/portraits/women/77.jpg"
    },

    {
        name: 'Simran',
        age: 22,
        city: 'Manali',
        language: 'Javascript',
        framework: 'AngularJS',
        image: "https://randomuser.me/api/portraits/women/78.jpg"
    },

    {
        name: 'Rohit Sharma',
        age: 25,
        city: 'Hyderabad',
        language: 'JavaScript',
        framework: 'Vue',
        image: "https://randomuser.me/api/portraits/men/80.jpg"
    },

    {
        name: 'Laxman',
        age: 23,
        city: 'Mathura',
        language: 'Java',
        framework: 'SpringBoot',
        image: "https://randomuser.me/api/portraits/men/90.jpg"
    },
]

function CVIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    };
}

let next = document.getElementById('next');

const candidate = CVIterator(data);

nextCV();
next.addEventListener('click', nextCV);

function nextCV() {
    const current = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (current != undefined) {
        image.innerHTML = `<img src = '${current.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name : ${current.name}</li>
        <li class="list-group-item">Age : ${current.age}</li>
        <li class="list-group-item">Lives in : ${current.city}</li>
        <li class="list-group-item">Worked on : ${current.language}</li>
        <li class="list-group-item">Worked on : ${current.framework}</li>
    </ul>`
    }
    else{
        alert('Candidates are done!!');
        window.location.reload();
    }
}