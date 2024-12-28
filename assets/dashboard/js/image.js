  document.getElementById('imageInput').addEventListener('change', function (event) {
         const file = event.target.files[0];
         const preview = document.getElementById('preview');

         if (file) {
            const fileSize = file.size / 1024;

            if (fileSize < 3) {
               alert('File size must be at least 3MB');
               event.target.value = '';
               preview.src = '';
               return;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
               preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
         }
      }); 
      $(document).ready(function () {
         $('.select2').select2({
            width: '100%',
            theme: 'bootstrap-5',
            placeholder: "Search and select an option",
            allowClear: true
         });
      }); 