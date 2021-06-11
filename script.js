const mensaje = document.getElementById('mensaje')
const pregunta = document.getElementById('pregunta')
const opcion1 = document.getElementById('opcion1')
const opcion2 = document.getElementById('opcion2')
const opcion3 = document.getElementById('opcion3')
const opcion4 = document.getElementById('opcion4')
const opcion5 = document.getElementById('opcion5')
const opcion6 = document.getElementById('opcion6')
const opcion7 = document.getElementById('opcion7')
const imagen = document.getElementById('imagen')
const botones = document.getElementById('botones')
const btnRepetir = document.getElementById('repetir')
const anterior =document.getElementById('anterior')
const contenedor = document.querySelector('.contenedor')
const titulo = document.getElementById('titulo')
const descripcion = document.getElementById('descripcion')
const numeroPregunta = document.getElementById('numeroPregunta')
        const datos = {

            //breakfast club, the shinning, indiana jones, rambo, dirty dancing
            total_preguntas: [{
                pregunta: 'Me gusta el género de:',
                respuesta1:['comedia',1],
                respuesta2: ['terror', 2],
                respuesta3: ['aventura', 3],
                respuesta4: ['accion', 4],
                respuesta5: ['baile', 5],
                respuesta6: ['fantasia', 6],
                respuesta7: ['romance', 7]
            },
           {
            pregunta: 'Me entretengo:',
                respuesta1: ['saliendo con mis amigos', 1],
                respuesta2: ['viajando', 2],
                respuesta3: ['conociendo nuevos lugares de mi ciudad', 3],
                respuesta4: ['practicando un deporte', 4],
                respuesta5: ['yendo a un club a bailar', 5],
                respuesta6: ['resolviendo puzzles', 6],
                respuesta7: ['yendo a fiestas', 7]
           } 
           ,
           {
            pregunta: 'Me gusta el color:',
                respuesta1: ['Azul', 1],
                respuesta2: ['Blanco', 2],
                respuesta3: ['Marrón', 3],
                respuesta4: ['Rojo', 4],
                respuesta5: ['Rosado', 5],
                respuesta6: ['Purpura',6],
                respuesta7: ['Rosado',7]
           } ,

           {pregunta: 'Me gustaria viajar a:',
           respuesta1: ['Florida', 1],
           respuesta2: ['Alaska', 2],
           respuesta4: ['Nueva Delhi',3],
           respuesta3: ['La selva del Amazonas', 4],
           respuesta5: ['La habana',5],
           respuesta6: ['Transilvania', 6],
           respuesta7: ['Chicago', 6]

        },
        {
            pregunta: 'Me gusta arreglar los problemas:',
            respuesta1: ['Hablando con las partes implicadas',1],
            respuesta2: ['Prefiero quedarme callado',2],
            respuesta3: ['Enfrentandome a ellos', 3],
            respuesta4: ['Discutiendo con los implicados',4],
            respuesta5: ['Ignoro los problemas',5],
            respuesta6: ['Busco cualquier solución', 6],
            respuesta7: ['Huyendo de ellos hasta que se resuelvan solos', 6]
        },
            {
                pregunta: 'Me considero una persona:',
                respuesta1: ['Sociable',1],
                respuesta2: ['Timida',2],
                respuesta3: ['Aventurera',3],
                respuesta4: ['Impulsiva',4],
                respuesta5: ['Tranquila',5],
                respuesta6: ['Extrovertida',6],
                respuesta7: ['Introvertida',7]
            },

            {
                pregunta: "Mi animal favorito es:",
                respuesta1: ['El perro', 1],
                respuesta2: ['El lobo',2],
                respuesta3: ['El tigre',3],
                respuesta4: ['El oso',4],
                respuesta5: ['La paloma',5],
                respuesta6: ['El aguila', 6],
                respuesta7: ['El pato', 6]
                
            },

            {
                pregunta: "Para mi lo mas importante es:",
                respuesta1: ['La amistad', 1],
                respuesta2: ['El trabajo', 2],
                respuesta3: ['Alcanzar mis metas',3],
                respuesta4: ['Luchar por mis ideales',4],
                respuesta5: ['Conseguir el amor', 5],
                respuesta6: ['La Familia',6],
                respuesta7: ['Ser leal a mis ideales',7]

            },

            {
                pregunta: "Me gustaría trabajar siendo",
                respuesta1: ['Profesor',1],
                respuesta2: ['Escritor',2],
                respuesta3: ['Arqueologo',3],
                respuesta4: ['Militar', 4],
                respuesta5: ['Profesor de danza',5],
                respuesta6: ['Mago',6],
                respuesta7: ['Diseñador de modas',7]
            }


        ]
        }

    function quizz(numero){
          if(numero < 9){
            pregunta.innerHTML = datos.total_preguntas[numero].pregunta
           
           opcion1.innerHTML = datos.total_preguntas[numero].respuesta1[0]
            opcion1.setAttribute("key", datos.total_preguntas[numero].respuesta1[1])
            opcion2.innerHTML = datos.total_preguntas[numero].respuesta2[0]
            opcion2.setAttribute("key", datos.total_preguntas[numero].respuesta2[1])
            opcion3.innerHTML = datos.total_preguntas[numero].respuesta3[0]
            opcion3.setAttribute("key", datos.total_preguntas[numero].respuesta3[1])
            opcion4.innerHTML = datos.total_preguntas[numero].respuesta4[0]
            opcion4.setAttribute("key", datos.total_preguntas[numero].respuesta4[1])
            opcion5.innerHTML = datos.total_preguntas[numero].respuesta5[0]
            opcion5.setAttribute("key", datos.total_preguntas[numero].respuesta5[1])
            opcion6.innerHTML = datos.total_preguntas[numero].respuesta6[0]
            opcion6.setAttribute("key", datos.total_preguntas[numero].respuesta6[1])
            opcion7.innerHTML = datos.total_preguntas[numero].respuesta7[0]
            opcion7.setAttribute("key", datos.total_preguntas[numero].respuesta7[1])
          
          }
        
             
        }  
btnRepetir.remove()
anterior.remove()
function Anterior(){
if(llaves.length >= 1){
    llaves.pop()
   quizz(n-= 1)
   numeroPregunta.innerHTML = `Pregunta ${n+1} de 9`
}
if(llaves.length == 0){
    anterior.remove()
}
}

function Repetir(){
quizz(0)
 botones.classList.remove('disable')
 btnRepetir.remove()
 mensaje.innerHTML = ''
 contenedor.appendChild(pregunta)
 contenedor.appendChild(botones)
 titulo.innerHTML = "¿Cual pelicula de los 80's deberia ver?"
 descripcion.innerHTML = ''
 numeroPregunta.innerHTML = 'Pregunta 1 de 9'
 imagen.remove()
        }
function tituloPelicula(e,numero){
    if (e == 1 && n == 9){
                       mensaje.innerHTML = 'Breakfast Club'
            descripcion.innerHTML = 'Cinco adolescentes aprenden sobre respeto y entendimiento mutuo cuando tienen que pasar un sábado en detención.'
            imagen.src = "https://images-na.ssl-images-amazon.com/images/I/81rJk6I49tL._AC_SL1500_.jpg"
          
    }
    if(e == 2 && n == 9){
                mensaje.innerHTML = 'The shinning'
                 descripcion.innerHTML = 'Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.'
        imagen.src = "https://images-na.ssl-images-amazon.com/images/I/610tXez3AqL._AC_SY679_.jpg"
                }
    if(e == 3 && n == 9){
                mensaje.innerHTML= 'Indiana Jones y los cazadores del arca perdida'
                 descripcion.innerHTML = 'El arqueólogo Indiana Jones necesita encontrar el Arca de la Alianza, una reliquia bíblica que contiene los Diez Mandamientos y que convierte en invencible a su poseedor. Jones deberá adelantarse a los nazis, quienes también buscan el Arca.'
        imagen.src = "https://images-na.ssl-images-amazon.com/images/I/71vYVW4tY0L._AC_SY679_.jpg"
                }
    if(e == 4 && n == 9){
                        mensaje.innerHTML = 'Rambo First Blood'
           descripcion.innerHTML = 'El veterano de Vietnam, John Rambo, envuelve a la policía en una cacería en el bosque tras escapar de un vil comisario.'
    imagen.src = "https://pics.filmaffinity.com/Acorralado_Rambo-572528533-large.jpg"
        }
    if(e == 5  && n == 9){
                 mensaje.innerHTML = 'Dirty Dancing'
                 descripcion.innerHTML = 'En el verano de 1963, una joven se va de vacaciones con sus padres a un hotel. Allí, conoce a un profesor de baile de quien se enamora, a pesar de sus diferencias sociales y la oposición de su padre.'
            imagen.src ="https://images-na.ssl-images-amazon.com/images/I/51lx7qleRsL._AC_SY450_.jpg"
                }
         if(e == 6  && n == 9){
                 mensaje.innerHTML = 'Labyrinth'
                 descripcion.innerHTML = 'Cuento sobre la búsqueda de una chica por su hermano menor que está atrapado en el reino místico de un rey de duendes.'
                 imagen.src = "https://images-na.ssl-images-amazon.com/images/I/81bp-ykVRyL._AC_SL1500_.jpg"
         }
         if(e == 7  && n == 9){
                 mensaje.innerHTML = 'Pretty in Pink'
                 descripcion.innerHTML = 'Una joven de clase baja teme que su pobreza afectará su relación con un compañero de escuela de familia adinerada.'
                 imagen.src ="https://images-na.ssl-images-amazon.com/images/I/51v7UsnlSUL._AC_.jpg"
         }
}

        quizz(0)
           let n = 0
        let llaves = []
         botones.addEventListener('click', function(e){
       
             key = e.target.getAttribute('key')
             let keyNumber = parseInt(key,10)
             contenedor.appendChild(anterior)
            for(let i = 0; i < 1; i++){
                n += 1
                llaves.push(keyNumber)

let mf = 1;
let m = 0;
let item;
for (let i=0; i<llaves.length; i++)
{
        for (let j=i; j<llaves.length; j++)
        {
                if (llaves[i] == llaves[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = llaves[i];
                }
        }
        m=0;
        
}

            
                tituloPelicula(item, n)  
                numeroPregunta.innerHTML = `Pregunta ${n+1} de 9`
                if(n == 9){
                    pregunta.innerHTML = 'Debes ver la pelicula:'
                    botones.classList.add('disable')
                    botones.remove()
                    pregunta.remove()
                    
                    contenedor.appendChild(imagen)
                    contenedor.appendChild(btnRepetir)
                    titulo.innerHTML = 'Debes ver:'
                    llaves = []
                    numeroPregunta.innerHTML =''
                    n = 0
                    anterior.remove()  
                       
                }
                quizz(n)                     
          }
           })
