document.addEventListener('DOMContentLoaded', function(){
    const submitForm = document.getElementById('input-buku');
    submitForm.addEventListener('submit', function(){
        addBook();  //tambah buku di dom
		
    });


    // Menutup tab edit
    const closeForm = document.getElementById('closeForm');
    closeForm.addEventListener('click', function() {
        const edit = document.querySelector('.edit-section');
        edit.setAttribute("hidden", '');
    })

    // Memanggil fungsi untuk mencari buku
    // apabila tombol cari ditekan
    const searchButton = document.getElementById('cari');
    searchButton.addEventListener('click', function(){
        const keyword = document.getElementById('inputCariBuku').value;
        searchBook(keyword.toLowerCase());              //masuk ke function searchBook buat hurup kecil smua
    });


    if(isStorageExist()){ loadDataFromStorage() }
    
});


// add dan refresh dan munculkan pop up
document.addEventListener("ondatasaved", () => {
    console.log("Data disimpan.");
});
document.addEventListener("ondataloaded", () => {
    refreshDataFromBooks();
});