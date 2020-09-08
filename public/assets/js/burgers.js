$(function () {
    $(".burger-status").on("click", function (event) {

        const id = $(this).data("id");
        const isDevoured = $(this).data("devoured");
        const newDevouredStatus = {
            devoured: isDevoured
        };

        // Send the PUT request.
        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(function () {
            // console.log("changed devoured to", isDevoured);
        }
        );
        location.reload();
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        // console.log(event)

        const newBurger = {
            name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // console.log(newBurger)

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // console.log("Added burger");
        }
        );
        location.reload();
    });
});
