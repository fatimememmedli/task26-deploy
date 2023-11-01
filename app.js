let url = "https://fakestoreapi.com/products/";
let myRow = document.querySelector(".myRow");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem) => {
      //   console.log(elem);
      elem.quantity = 0;

      myRow.innerHTML += `
        <div class="card me-3 mb-3">
          <div class="image">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>
          <div class="card-details">
            <div class="card-details-text">
              <div class="card-details-head d-flex justify-content-between">
                <div class="name-price">
                  <p class="name">${elem.title}</p>
                  <p class="price">Price:${elem.price} $</p>
                </div>
                <div class="favourite-icon">
                  <button
                    type="button"
                    
                    class="favourite-btn btn btn-danger"
                  >
                    <i name="${elem.id}" class="fav-icon fa-regular fa-heart" style="color: #ffffff"></i>
                  </button>
                </div>
              </div>
              <p class="catagory">Catagory:${elem.category}</p>
              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <i class="fa-solid fa-star" style="color: #ffc800"></i>
                <span class="fa fa-star"></span>
              </div>
              <p class="stock-count">Stock: ${elem.rating.count}</p>
            </div>
            <div
              class="basket-button w-100 d-flex align-item-center justify-content-end"
            >
              <button
                type="button"
                name="${elem.id}"
                class="add-basket btn btn-success"
              >
                <i
                  class="fa-solid fa-basket-shopping"
                  style="color: #ffffff"
                ></i>
              </button>
            </div>
          </div>
        </div>
        `;
    });

    let basketBtns = document.querySelectorAll(".btn-success");
    let arr;
    let localBasketArr = JSON.parse(localStorage.getItem("basket"));

    if (localBasketArr) {
      arr = [...localBasketArr];
    } else {
      arr = [];
    }
    // console.log(basketBtns);
    console.log(arr);
    for (let basketbtn of basketBtns) {
      basketbtn.addEventListener("click", function () {
        // let result = arr.find((y) => y.id == this.name);
        // console.log(result);
        data.forEach((elem) => {
          if (elem.id == this.name) {
            // arr.forEach((obj) => {
            //   console.log(obj);
            //   if (arr.length == 0 && obj.id != this.name) {
            elem.quantity++;
            arr.push(elem);
            localStorage.setItem("basket", JSON.stringify(arr));
            //   }
            // });
          }
        });
      });
    }

    let favIcons = document.querySelectorAll(".fav-icon");
    // console.log(favIcons);

    let favArr;
    let localFavArr = JSON.parse(localStorage.getItem("fav"));

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
