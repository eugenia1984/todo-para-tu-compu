(() => {
  "use strict";

  console.log("Formulario de contacto");
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Get all the input values
  const firstNameInput = document.getElementById("inputFirstName");
  const lastNameInput = document.getElementById("inputLastName");
  const emailInput = document.getElementById("inputEmail");
  const contactTextarea = document.getElementById("textareaContact");

  // For the alert message
  const alert = document.getElementById("liveAlertPlaceholder");

  const clearAlert = () => {
    setTimeout(() => {
      alert.innerHTML = "";
    }, 3000);
  };

  // Loop over them and prevent submission, if data it's ok send data, if not show alert error
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // If validation it's ok, prevent default submit
          event.preventDefault();

          // Get the submit button and change its text
          const submitButton = form.querySelector('button[type="submit"]');
          submitButton.textContent = "Enviando...";
          submitButton.disabled = true;

          // Send data
          fetch("https://formsubmit.co/ajax/costamariaeugenia1@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Nombre: firstNameInput.value,
              Apellido: lastNameInput.value,
              "Correo electrónico": emailInput.value,
              Consulta: contactTextarea.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                alert.innerHTML = `<p class="alert alert-success"> Formulario enviado con éxito</p>`;
                form.reset();
                form.classList.remove("was-validated");
                clearAlert();
              } else {
                alert.innerHTML = `<p class="alert alert-danger"> Hubo un error al enviar el formulario</p>`;
                clearAlert();
              }
            })
            .catch((error) => {
              if (error) {
                alert.innerHTML = `<p class="alert alert-danger"> Hubo un error al enviar el formulario</p>`;
                clearAlert();
              }
            })
            .finally(() => {
              // Restore the button text and re-enable it
              submitButton.textContent = "Enviar";
              submitButton.disabled = false;
            });
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
