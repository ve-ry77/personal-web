let blogs = []; // Length nya adalah 0

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    let formattedDate = formatDateToWib(blogs[i].postedAt);
    // Menampilkan blogs yang udah kita buat dengan mengisi form
    console.log(blogs[i]);

    blogListElement.innerHTML += `
        <div id="${i}" class="blog-list-item">
                    <div class="blog-image">
                        <img src="${blogs[i].image}" alt="blog-image">
                    </div>
                    <div class="blog-content">
                        <div class="button-group">
                            <button class="button-edit">Edit Post</button>
                            <button class="button-post">Post Blog</button>
                        </div>
                        <h1>
                            <a href="blog.detail.html" class="blog-item-title">${
                              blogs[i].title
                            }</a>
                        </h1>
                        <div class="detail-blog-content">
                            ${formattedDate} | ${blogs[i].author}
                        </div>
                        <p class="blog-text">${blogs[i].content}</p>
                        <p class="relative-time">${getRelativeTime(
                          blogs[i].postedAt
                        )}</p>
                    </div>
                </div>`;
  }
}

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let imageInput = document.getElementById("input-blog-image");

  if (title == "" || content == "" || imageInput.files.length === 0) {
    return alert("fields cannot be empty");
  }

  let image = URL.createObjectURL(imageInput.files[0]);

  let blog = {
    author: "Verrian Oktanto",
    title: title,
    image: image,
    content: content,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function firstBlogContent() {
  return `
  <div id=""class="blog-list-item">
                    <div class="blog-image">
                        <img src="blog-img.png" alt="blog-image">
                    </div>
                    <div class="blog-content">
                        <div class="button-group">
                            <button class="button-edit">Edit Post</button>
                            <button class="button-post">Post Blog</button>
                        </div>
                        <h1>
                            <a href="blog.detail.html" class="blog-item-title">Pasar Coding di Indonesia Masih Menjanjikan</a>
                        </h1>
                        <div class="detail-blog-content">
                            12 Jul 2024 22:30 WIB | Verrian Oktanto
                        </div>
                        <p class="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint aliquam assumenda reiciendis iure repellendus ipsa necessitatibus. Eum architecto sit, recusandae ipsam iusto soluta corrupti exercitationem dolore, facere unde molestiae nihil doloribus, repudiandae quae. Rem, quae.
                    </div>
                </div>`;
}

function formatDateToWib(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  let day = date.getDate().toString();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  //   console.log(`tanggal ${day} bulan ${month} tahun ${year}`);

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(targetDate) {
  let now = new Date();
  let diffInSeconds = Math.floor((now - targetDate) / 1000);
  console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }
}
