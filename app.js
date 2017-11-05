
    var button = document.getElementById('searchButton');
    var output = '';
    button.addEventListener('click', function () {
        var input = document.getElementById('searchInput').value;
        console.log(input);  
        // var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=" + input;
        
        $.ajax({
            url : "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&origin=*&list=search&srsearch=" + input,
            success : function (data) {
                var results = data.query.search;
                console.log(results);
                output = '<ul class="list-group">';
                for (var i = 0; i < results.length; i++) {
                    output += '<a href="https://en.wikipedia.org/?curid=' + results[i].pageid + '">';
                    output += '<li class="list-group-item"><h2>' + results[i].title + '</h2></a>';
                    output += '<p>' + results[i].snippet + '...</p></li>';
                }
                output += '</ul>';
                document.getElementById('output').innerHTML = output;
            }
        });
    });
    $("#searchInput").keypress(function(e) {
        if (e.which == 13) {
          $("#searchButton").click();
        }
    });