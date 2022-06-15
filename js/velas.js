const featured = document.getElementById("featured");
const blogNav = document.getElementById("blog-nav");

let pageNumb = 1;

async function getPosts(page) {
    try {
        const url = `https://secret-energy.pt/wp/wp-json/wp/v2/posts?categories=16&page=${page}&per_page=3`;
        const postPromise = await fetch(url);
        const posts = await postPromise.json();

        let postsHtml = "";
        let isLeft = true;
        let postCount = 0;

        while (featured.firstChild) {
            featured.removeChild(featured.lastChild);
        }

        posts.forEach((post) => {
            const newPost = document.createElement("div");
            newPost.classList.add("featured-post", "container");
            if (!isLeft) {
                newPost.classList.add("align-right");
            }

            postsHtml = `<img src="${post.better_featured_image.source_url}" alt="${post.better_featured_image.alt_text}" class="featured-post-img"/>
        <div class="section-content">
        <h2 class="section-title">${post.title.rendered}</h2>
        ${post.excerpt.rendered}
        <a href="javascript:void(0)" id="post-${postCount}" class="btn" onclick="openPost(${post.id})">ler mais</a>
        </div>`;

            newPost.innerHTML = postsHtml;
            featured.appendChild(newPost);

            if (isLeft) {
                isLeft = false;
            } else {
                isLeft = true;
            }
            postCount++;
        }
        );
        if(postCount < 3) {
            document.getElementById("nav-right").classList.add("hidden");
        }
    } catch (err) {
        const pageNavNumb = document.getElementById("page-nav");
        const rightArrow = document.getElementById("nav-right");
        const leftArrow = document.getElementById("nav-left");
        pageNumb--;
        getPosts(pageNumb);
        pageNavNumb.innerHTML = pageNumb;
        rightArrow.style.display = "none";
        leftArrow.style.display = "block";
    }
}

function nextPage() {
    pageNumb++;
    getPosts(pageNumb);
    document.getElementById("nav-left").classList.remove("hidden");
    document.getElementById("page-nav").innerHTML = pageNumb;
}

function prevPage() {
    pageNumb--;
    getPosts(pageNumb);
    document.getElementById("page-nav").innerHTML = pageNumb;
    if (pageNumb <= 1) {
        document.getElementById("nav-left").classList.add("hidden");
    }
}

async function openPost(postNumb) {
    const url = `https://secret-energy.pt/wp/wp-json/wp/v2/posts/${postNumb}`;
    const postPromise = await fetch(url);
    const post = await postPromise.json();

    let postHtml = `<div class="post-container">
    <a
                class="tandc-close-btn"
                href="javascript:void(0)"
                onclick="closePost()"
                ><i class="fas fi-rr-cross-small"></i
                ></a>
    <h2>${post.title.rendered}</h2>
    ${post.content.rendered}
    </div>`
    const newPost = document.createElement('div')
    newPost.id = "post"
    newPost.classList.add('post')
    newPost.innerHTML = postHtml;
    document.body.appendChild(newPost);
}

function closePost() {
    const post = document.getElementById("post");
    post.remove();
}

getPosts(pageNumb);
