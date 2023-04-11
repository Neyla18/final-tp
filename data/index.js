const datas = {
    section: {
        title: ["Today's ", "Special"],
        crustyFish : {
            title: "The Crusty fish",
            img: {url : "./img/recipe1.jpg", alt: "fresh fries fish with some green pees and a white sauce"},
            para: [
                {p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et? rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
            ],
            a: "Read more",
        },
        multiFish : {
            title: "The Multi fish",
            img: {url : "./img/recipe2.jpg", alt: "crevettes, coquillages in different white cup and a green sauce"},
            para: [
                {p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et? rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
            ],
            a: "Read more",
        },
        
    },
        
}


console.log(datas.section.title);



function hideShowSection(){

        const article1 = document.createElement('article');
        const title = document.createElement('h2');
        const crustyFish = document.createElement('h3');
        const imgCrusty = document.createElement('img');
        const crustyP1 = document.createElement('p');
        const crustyP2 = document.createElement('p');
        const crustyP3 = document.createElement('p');
        const lienCrusty = document.createElement('a');
        

        const article2 = document.createElement('article');
        const MultiFish = document.createElement('h3');
        const imgMulti = document.createElement('img');
        const multiP1 = document.createElement('p');
        const multiP2 = document.createElement('p');
        const multiP3 = document.createElement('p');
        const lienMulti = document.createElement('a');
        
        document.querySelector('main').documchildNodes[1].
                      appendChild(article1,article2);
             article1.append(crustyFish, 
                             imgCrusty,
                             crustyP1,
                             crustyP2,
                             crustyP3,
                             lienCrusty)
              
             article2.append(MultiFish, 
                imgMulti,
                multiP1,
                multiP2,
                multiP3,
                lienMulti)                      



        




 }   
    

 document.addEventListener("click", function (){
  document.getElementById('btn-section')
            .addEventListener('click',hideShowSection)
//  document.getElementById('btn-aside').
//  addEventListener('click', showHideAside)
    });

