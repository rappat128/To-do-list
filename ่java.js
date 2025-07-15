const textbox = document.querySelector('.text-priority-hover ')
        textbox.addEventListener('click', () => {
         
            textbox.classList.toggle('rotate')
            // bey
            const checklist = document.querySelector('.Checklist');
            checklist.classList.toggle('hidden');
            
            

        })
// top-JS
const textbox2 = document.querySelector('.mid-text-priority-hover')
       textbox2.addEventListener('click', () => {

            textbox2.classList.toggle('mid-rotate')

            const Checklist2 = document.querySelector('.mid-Checklist');
            Checklist2.classList.toggle('mid-hidden');
       });

// mid-JS
const textbox3 = document.querySelector('.low-text-priority-hover')
            textbox3.addEventListener('click', () => {

                textbox3.classList.toggle('low-rotate')

                const Checklist3 =document.querySelector('.low-Checklist');
                Checklist3.classList.toggle('low-hidden');

        });


// low-JS
const Performance = document.querySelector('.Performance-b')
        Performance.addEventListener('click', () => {
         
            Performance.classList.toggle('rotate-Performance-b')
            // bey
            const siedber = document.querySelector('.sied-bar');
            siedber.classList.toggle('hidden-sied-bar');
            
        });

// Performance-JS
// ----------------------------------- data saved --------------------------------------
