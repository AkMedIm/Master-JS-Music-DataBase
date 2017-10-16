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
    var method = "GET";
    var container = document.querySelector("#album_list_container");
    container.innerHTML = "";

    http.open(method,url);
    http.onreadystatechange = function(){

      if(http.readyState === XMLHttpRequest.DONE && http.status === 200){

          showArtist(JSON.parse(http.response));


      }else if(http.status === XMLHttpRequest.DONE && http.status !== 200){
        // something failed
      }

    };
    http.send();
  };
  this.showArtist = function(obj){

    var container = document.querySelector("#album_list_container");
    var template = "";

    if(obj.results.length > 0){
      for(var i=0; i< obj.results.length; i++){

        template += '<div class="col-sm-3 album_item">';
        template += '<div class="item_thumbnail" style="background: url()"></div>';
        template += '<div class="item_title">I can destroy</div>';
        template += '<div class="item_price"><span>Price:</span> 200 USD</div>';
        template += '<a href="#" target="_blank">Buy Now</a>';
        template += '</div>';
      }

      container.innerHTML = '';
      container.innerAdjacentHTML('afterbegin',template);

    }else{
      // error message
      document.querySelector('#not_match').style.display='block';
    }

  };
  this.init();
}) ();
