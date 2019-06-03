$(function() {
    $(".munch").on("click", function(event) {
        console.log($(this).data("id"));

        const burgerUpdate = {
            id: $(this).data("id")
        };

        $.ajax(`/api/burger/` + $(this).data("id"), {
            type: "PUT",
            data: burgerUpdate
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      const newBurger = {
        name: $("#burger_name").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        },
        function (err) {
            console.log(err);
        }
      )
    });
  });