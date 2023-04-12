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



console.log();



    const section =  document.querySelector('main').getElementsByTagName('section')[1];

// section.style.display = 'block';   

    // console.log(` ${datas.section.title}`)
    // for(const data of Object.values(datas)){


        const article1 = document.createElement('article');
        const titleSection = document.createElement('h2');
         
        // crusty
        const crustyFishTitle = document.createElement('h3');
        const imgCrusty = document.createElement('img');
        const crustyP1 = document.createElement('p');
        const crustyP2 = document.createElement('p');
        const crustyP3 = document.createElement('p');
        const lienCrusty = document.createElement('a');
        
    
        const article2 = document.createElement('article');
        
        // multi
        const MultiFishTitle = document.createElement('h3');
        const imgMulti = document.createElement('img');
        const multiP1 = document.createElement('p');
        const multiP2 = document.createElement('p');
        const multiP3 = document.createElement('p');
        const lienMulti = document.createElement('a');
        
    section.appendChild(titleSection,article1,article2);
             article1.appendChild(crustyFishTitle, 
                             imgCrusty,
                             crustyP1,
                             crustyP2,
                             crustyP3,
                             lienCrusty)
              
             article2.appendChild(MultiFishTitle, 
                imgMulti,
                multiP1,
                multiP2,
                multiP3,
                lienMulti)                      
    

     
            // crustyfish
                
            //  titleSection.textContent = datas.section.title;
              crustyFishTitle.textContent = 'je suis la';
              
            //   imgCrusty =  datas.section.crustyFish.img.url;
            //   crustyP1.textContent = datas.section.crustyFish.para[0];
            //   crustyP2.textContent = datas.section.crustyFish.para[1];
            //   crustyP3.textContent = datas.section.crustyFish.para[2];
            //   lienCrusty.textContent = datas.section.crustyFish.a;
            // //  multifish
             
            //    MultiFishTitle.textContent = datas.section.multiFish.title;
            //    imgMulti.textContent = datas.section.multiFish.img.url;
            //    crustyP1.textContent = datas.section.multiFish.para[0];
            //    crustyP2.textContent = datas.section.multiFish.para[1];
            //    crustyP3.textContent = datas.section.multiFish.para[2];
            //    lienCrusty.textContent = datas.section.multiFish.a;
                


    
  
    


               
    


                 
                 

//  const btnSection = document.getElementById('btn-section')
//  document.addEventListener("DOMContentLoaded", function() {
//  document.addEventListener("click", function (){
//            btnSection.addEventListener('click',  hideShowSection)
// //  document.getElementById('btn-aside').
// //  addEventListener('click', showHideAside)
//     });
// });

 

 

// function onClick(){
//    btnSection.removeEventListener('click', onClick);
//   hideShowSection()
// }

// btnSection.addEventListener('click', onClick);

