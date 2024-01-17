import {blog} from './blogs.js'
const blogArray = blog
const d = new Date()
const blogPosts = document.getElementById('blog-posts-container')
const viewButton = document.getElementById('view-more')
const copyRight = document.getElementById('copyright')
const blogs = document.getElementsByClassName('blogs')

copyRight.textContent = `Copyright ©${d.getFullYear()}`

viewButton.addEventListener('click',()=>{
    for(let post of blogs){
        if(post.classList.contains('hidden') && window.getComputedStyle(post).display === 'none' &&
        window.innerWidth < 700){
            post.style.display = 'block'
            viewButton.innerText = 'Show less'
        } else if (post.classList.contains('hidden') && window.getComputedStyle(post).display == 'block' &&
        window.innerWidth < 700){
            post.style.display = 'none'
            viewButton.innerText = 'View more'
        }
    }
})


function render(){
    let blogContainer =``
    for(let post of blogArray){
        blogContainer+=`
            <div class="${post.class}">
                <img class="blog-img" src="${post.image}">
                <p class="blog-date">${post.date}</p>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-desc">${post.desc}</p>
            </div>
        `
    }
    blogPosts.innerHTML = blogContainer
}
render()