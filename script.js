const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        if((entry.isIntersecting)&&(entry.target.classList.contains("hiddenpop"))){
            entry.target.classList.add("showpop");
        }
        else if((entry.isIntersecting) && (entry.target.classList.contains("hiddenslidel"))){
            entry.target.classList.add("showslidel");
        }
        else if((entry.isIntersecting)&& (entry.target.classList.contains("hiddenslideu"))){
            entry.target.classList.add("showslideu");
        }
        else if ((entry.isIntersecting) && (entry.target.classList.contains("hiddenshake"))){
            entry.target.classList.add("showshake");
        }
        else if((entry.isIntersecting) && (entry.target.classList.contains("hiddenslider"))){
            entry.target.classList.add("showslider");
        }
       
        
    });
});

const x = document.querySelectorAll(".hiddenpop");
x.forEach((el) => observer.observe(el));


const y = document.querySelectorAll(".hiddenslidel");
y.forEach((el) => observer.observe(el));


const z = document.querySelectorAll(".hiddenshake");
z.forEach((el) => observer.observe(el));

const u = document.querySelectorAll(".hiddenslideu");
u.forEach((el) => observer.observe(el));

const r = document.querySelectorAll(".hiddenslider");
r.forEach((el)=> observer.observe(el));