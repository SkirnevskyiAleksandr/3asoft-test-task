const inputFile = document.getElementById("inputFile");
const previewContainer = document.getElementById('imagePreview');
console.log(previewContainer)
const previewImage = previewContainer.querySelector('.default-image');
const previewText = previewContainer.querySelector('.default-text');

inputFile.addEventListener('change', function () {
    const file = this.files[0];
    console.log(file)
    if (file) {
        const reader = new FileReader();
        previewText.style.display = "none"; // remove default text 
        previewImage.style.display = "block"; // show new picture

        reader.addEventListener('load', function () {
            console.log(this)
            previewImage.setAttribute('src', this.result);
        });

        reader.readAsDataURL(file);
    } else {
        previewText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute('src', '');
    }

})
