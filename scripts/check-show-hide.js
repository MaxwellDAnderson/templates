$(document).ready(function() {
  /*
  These scripts are intended to be used in situations where
  one would like to show or hide content based on whether
  a particular checkbox is checked. Provision is also made
  for both a "Check All" and "Clear All" button.
  */

  // Clear All Checkboxes
  $("#clear-all").on("click", function() {
    $("input").prop("checked", false);
    $("[data-category]").hide();
  });

  // Check All Checkboxes
  $("#check-all").on("click", function() {
    $("input").prop("checked", true);
    $("[data-category]").show();
  });

  /*
  If you want the item to be shown by default,
  then utilize .show()
  If you want the item to be hidden by default,
  then utilize .hide()
  */

  // Show .categoryA by default
  $("[data-category='A']").show();
  $("#checkCategoryA").change(function() {
    if ($(this).prop("checked") === true) {
      $("[data-category='A']").show();
    }
    if ($(this).prop("checked") === false) {
      $("[data-category='A']").hide();
    }
  })

  // Show .categoryB by default
  $("[data-category='B']").show();
  $("#checkCategoryB").change(function() {
    if ($(this).prop("checked") === true) {
      $("[data-category='B']").show();
    }
    if ($(this).prop("checked") === false) {
      $("[data-category='B']").hide();
    }
  })
})