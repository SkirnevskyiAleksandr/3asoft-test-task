
let fileInput = document.getElementById("file-input");//input
let imageContainer = document.getElementById("images"); //container for images
// let numOfFiles = document.getElementById("num-of-files"); // number of selected files

fileInput.addEventListener('change', function preview() {
    imageContainer.innerHTML = "";
    // numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (let index = 0; index < fileInput.files.length; index++) {

        let reader = new FileReader();
        reader.readAsDataURL(fileInput.files[index]);
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = fileInput.files[index].name;
        figure.appendChild(figCap); //add figcaption in figure
        reader.addEventListener('load', () => {

            let img = document.createElement("img");
            img.setAttribute("src", reader.result); //result of reading file
            figure.insertBefore(img, figCap);
            localStorage.setItem(fileInput.files[index].name, reader.result)

        })
        imageContainer.appendChild(figure);
        document.location.reload()

    }

})




document.addEventListener('DOMContentLoaded', () => {
    imageContainer.innerHTML = "";
    // numOfFiles.textContent = `${localStorage.length} Files Selected`;
    for (let b = 0; b < localStorage.length; b++) {

        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = localStorage.key(b);
        figure.appendChild(figCap); //add figcaption in figure
        console.log(figCap.innerHTML)


        let img = document.createElement("img")
        img.setAttribute("src", localStorage.getItem(localStorage.key(b))); //result of reading file
        figure.insertBefore(img, figCap);

        imageContainer.appendChild(figure);

        imageContainer.addEventListener('click', (e) => {
            if (e.target && e.target.tagName == 'IMG') {
                e.target.parentNode.remove()
                localStorage.removeItem(e.target.nextSibling.innerText)
            }
        })

    }
})








