let texto = document.getElementById('testimonio');

// MÉTODO PARA OBTENER POSTS
async function getPosts(id) {

    return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((resp) => {
            return resp.json();
        })
        .then((post) => {
            for (let i = 0; i < 4; i++) {
                return post;
            }
        }).catch((error) => {
            console.log('ERROR: ', error);
        });
}

// MÉTODO PARA OBTENER USUARIOS
let users = [
    {
        id: 1,
        name: "Jean Dean",
        posts: [
            {
                body: "Gerente de Projetos"
            }
        ]
    },
    {
        id: 2,
        name: "Kauan Tavares",
        posts: [
            {
                body: "Engenheiro Eletricista"
            }
        ]
    },
    {
        id: 3,
        name: "Joel Tavares",
        posts: [
            {
                body: "Engenheiro de Software"
            }
        ]
    },
    {
        id: 4,
        name: "Marco Antonio",
        posts: [
            {
                body: "Engenheiro de desing do produto"
            }
        ]
    },
    {
        id: 5,
        name: "Danton Araujo",
        posts: [
            {
                body: "Engenheiro Eletricista"
            }
        ]
    }
];

async function getUsers() {
    for (let i = 0; i < 5; i++) {
        const usuario = users[i];
        let string = '';

        if (usuario.id === 1) {
            string += `
                <div class="carousel-item active">
                    <img class="d-block mx-auto" src="images/person_${i + 1}.jpeg" alt=""> 
            `;
        } else {
            string += `
                <div class="carousel-item">
                    <img class="d-block mx-auto" src="images/person_${i + 1}.jpeg" alt=""> 
            `;
        }

        string += ` <p class="text-center sliderText">${usuario.posts[0].body}</p>`;
        string += `<p class="text-center"><b>${usuario.name}</b></p>`;
        string += `</div>`;

        texto.innerHTML += string;
    }
}
getUsers();