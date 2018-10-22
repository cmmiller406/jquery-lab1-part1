"use strict";
$(document).ready(() => {
    $(".new-form").hide();
    $(".available").css("cursor", "pointer");

    $(".available").on("click", (event) => {
        $(".new-form").css("display", "flex");
        $(event.target).addClass("reserved").removeClass("available");
        $(event.target).css("cursor", "not-allowed").css("background-color", "#ADAAAA");
    });

    $(".inputs-btn").on("click", (event) => {
        $(".new-form").hide();
    });

    $(".contact_exit").on("click", (event) => {
        $(".new-form").hide();
        $(".reserved").addClass("available").removeClass("reserved");
        $(".available").css("cursor", "pointer").css("background-color", "#EEE");
    });
});