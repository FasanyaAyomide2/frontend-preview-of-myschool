
      $(document).on('click', '#dashboard-trigger', function () {
         $("#results-page").addClass("d-none");
         $("#biodata-page").addClass("d-none");
         $("#settings-page").addClass("d-none");
         $("#course-page").addClass("d-none");
         $("#payment-page").addClass("d-none");
         $("#dashboard-page").removeClass("d-none");
      });

      $(document).on('click', '#biodata-trigger', function () {
         $("#course-page").addClass("d-none");
         $("#dashboard-page").addClass("d-none");
         $("#results-page").addClass("d-none");
         $("#settings-page").addClass("d-none");
         $("#payment-page").addClass("d-none");
         $("#biodata-page").removeClass("d-none");
      });

      $(document).on('click', '#payment-trigger', function () {
         $("#biodata-page").addClass("d-none");
         $("#dashboard-page").addClass("d-none");
         $("#results-page").addClass("d-none");
         $("#settings-page").addClass("d-none");
         $("#course-page").addClass("d-none");
         $("#payment-page").removeClass("d-none");
      });

      $(document).on('click', '#coursereg-trigger', function () {
         $("#biodata-page").addClass("d-none");
         $("#payment-page").addClass("d-none");
         $("#settings-page").addClass("d-none");
         $("#results-page").addClass("d-none");
         $("#dashboard-page").addClass("d-none");
         $("#course-page").removeClass("d-none");
      });
 

      $(document).on('click', '#result-trigger', function () {
         $("#biodata-page").addClass("d-none");
         $("#course-page").addClass("d-none");
         $("#settings-page").addClass("d-none");
         $("#payment-page").addClass("d-none");
         $("#dashboard-page").addClass("d-none");
         $("#results-page").removeClass("d-none");
      });

      $(document).on('click', '#settings-trigger', function () {
         $("#biodata-page").addClass("d-none");
         $("#course-page").addClass("d-none");
         $("#payment-page").addClass("d-none");
         $("#results-page").addClass("d-none");
         $("#dashboard-page").addClass("d-none");
         $("#settings-page").removeClass("d-none");
      }); 

      $(document).ready(function () {
         function showSection(sectionId) {
            $("#results-page, #biodata-page, #settings-page, #course-page, #payment-page, #dashboard-page").addClass("d-none");
            $(`#${sectionId}`).removeClass("d-none");
         }

         const lastSection = localStorage.getItem("lastSection");
         if (lastSection) {
            showSection(lastSection);
         } else {
            showSection("dashboard-page");
         }

         $(document).on('click', '#dashboard-trigger', function () {
            showSection("dashboard-page");
            localStorage.setItem("lastSection", "dashboard-page");
         });

         $(document).on('click', '#biodata-trigger', function () {
            showSection("biodata-page");
            localStorage.setItem("lastSection", "biodata-page");
         });

         $(document).on('click', '#payment-trigger', function () {
            showSection("payment-page");
            localStorage.setItem("lastSection", "payment-page");
         });

         $(document).on('click', '#coursereg-trigger', function () {
            showSection("course-page");
            localStorage.setItem("lastSection", "course-page");
         });
 

         $(document).on('click', '#result-trigger', function () {
            showSection("results-page");
            localStorage.setItem("lastSection", "results-page");
         });

         $(document).on('click', '#settings-trigger', function () {
            showSection("settings-page");
            localStorage.setItem("lastSection", "settings-page");
         });
      }); 
 
      document.getElementById('next-academic').addEventListener('click', function () {
         var academicTab = new bootstrap.Tab(document.getElementById('academic-tab'));
         academicTab.show();
      });

      document.getElementById('next-passport').addEventListener('click', function () {
         var academicTab = new bootstrap.Tab(document.getElementById('passport-tab'));
         academicTab.show();
      });

      document.getElementById('next-final').addEventListener('click', function () {
         var academicTab = new bootstrap.Tab(document.getElementById('finalize-tab'));
         academicTab.show();
      });
 