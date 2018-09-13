
let fetch = function (isbnInput) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ isbnInput,
      success: function(data) {
        $("#parent").empty()
        const url = data.items[0].volumeInfo.imageLinks.thumbnail;
        const title = data.items[0].volumeInfo.title
        const authors = data.items[0].volumeInfo.authors
        const description = data.items[0].volumeInfo.description
        let obj = {
          img: url,
          title:title,
          description:description ,
          authors:authors
        }
        const source = $('#book-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(obj);
        $("#parent").append(newHTML)
        console.log(data);
      },
      error: function(textStatus) {
        console.log(textStatus);
      }
    }); 
  };
$("#searchButton").on("click", function(){
  let isbnInput = $(".isbn").val()
  fetch(isbnInput)
})

