let localFavArr = JSON.parse(localStorage.getItem("fav"));
let favArr = [];
let favBox = document.querySelector(".favourite-box");
if (localFavArr) {
  favArr = [...localFavArr];
}

favArr.forEach((elem) => {
  favBox.innerHTML += `
    <div class="basket-item">
            <div
              class="basket-item-details h-90 d-flex justify-content-between"
            >
              <div class="basket-image mt-2">
                <img
                  src="${elem.image}"
                  alt=""
                />
              </div>
              <div class="basket-item-namePrice mt-2">
                <p class="basket-item-name">${elem.title}</p>
                <p class="ms-5">${elem.price}</p>
              </div>
            </div>
            <div class="basket-delete-buttons d-flex mt-1 justify-content-center ms-3">
              
              <button
                    type="button"
                    
                    class="favourite-btn btn btn-danger"
                  >
                    <i name="${elem.id}" class="fav-icon fa-solid fa-heart" style="color: #ffffff"></i>
                  </button>
            </div>
          </div>
    `;
  let favIcons = document.querySelectorAll(".fav-icon");
  // console.log(favIcons);

  if (localFavArr) {
    favArr = [...localFavArr];
  } else {
    favArr = [];
  }
  for (let faviconn of favIcons) {
    favArr.forEach((e) => {
      if (e.id == faviconn.getAttribute("name")) {
        faviconn.classList.replace("fa-regular", "fa-solid");
      }
    });
  }
  for (let favicon of favIcons) {
    //   console.log(favicon);
    favicon.addEventListener("click", function () {
      if (this.classList.contains("fa-solid")) {
        this.classList.replace("fa-solid", "fa-regular");
        favArr = favArr.filter(
          (elem) => elem.id != favicon.getAttribute("name")
        );
        localStorage.setItem("fav", JSON.stringify(favArr));
        this.parentElement.parentElement.parentElement.remove();
      } else {
        data.forEach((elem) => {
          this.classList.replace("fa-regular", "fa-solid");

          if (elem.id == favicon.getAttribute("name")) {
            favArr.push(elem);
            localStorage.setItem("fav", JSON.stringify(favArr));
          }
        });
      }
    });
  }
});
