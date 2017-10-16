(function musicDB() {
  this.init = function(){
    this.search();
  };

  this.search = function(){
    var form = document.querySelector("#form");
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var value = document.querySelector("#input_search").value;
      form.reset();

      getData(value);

    });
  };
  this.getData = function(artist){
    var http= new XMLHttpRequest();
    var url = "https://itunes.apple.com/search?term=audioslave&entity=album";
  };
  this.init();
}) ();
