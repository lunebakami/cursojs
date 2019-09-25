// Funão delay aciona o .then após 1s
const delay = (x) => new Promise(resolve => setTimeout(() =>{resolve(x+'sec')}, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
// umPorSegundo();

async function onePerSec(){
    console.log(await delay(1));
    console.log(await delay(2));
    console.log(await delay(3));
}

onePerSec();