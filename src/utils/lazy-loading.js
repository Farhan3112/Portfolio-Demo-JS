const lazyLoading = () => {
    const laztImgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries, observer)=>{
        // console.log(entries);
        entries.forEach(entry => {
            if(entry.isIntersecting){
                // console.log(entry.target);
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    
    laztImgs.forEach(img => {
        observer.observe(img);
    });
};

export default lazyLoading;