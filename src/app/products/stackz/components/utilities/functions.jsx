 
 
export const checkReadyState = () => {
    
    if (document.readyState === 'complete') {
        // Code to set inline attributes here
        const element = document.querySelector('body'); 
        if (element) {
            // for(let i= 0.1; i <= 1; i += 0.1) {
            //     setTimeout(() => {
            //         element.style.opacity = i;
            //     }, i * 3000);
            // }
            element.style.opacity =  1;
        }
    }
    
};
