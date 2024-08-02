(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Get all the input values
  const firstNameInput = document.getElementById("inputFirstName");
  const lastNameInput = document.getElementById("inputLastName");
  const emailInput = document.getElementById("inputEmail");
  const contactTextarea = document.getElementById("textareaContact");

  // Get the radio buttons
  const contactByWhatsappInputs =
    document.getElementsByName("contactByWhatsapp");
  // Get the mobile number container and input
  const mobileNumberContainer = document.getElementById(
    "mobileNumberContainer"
  );
  const mobileNumberInput = document.getElementById("inputMobileNumber");

  // For the alert message
  const alert = document.getElementById("liveAlertPlaceholder");

  const clearAlert = () => {
    setTimeout(() => {
      alert.innerHTML = "";
    }, 3000);
  };

  // Toggle the visibility of the mobile number input based on the radio button selection
  const toggleMobileNumberInput = () => {
    if (contactByWhatsappInputs[0].checked) {
      mobileNumberContainer.style.display = "block";
    } else {
      mobileNumberContainer.style.display = "none";
      mobileNumberInput.value = "";
    }
  };

  // Add event listeners to the radio buttons
  Array.from(contactByWhatsappInputs).forEach((input) => {
    input.addEventListener("change", toggleMobileNumberInput);
  });

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

          // Get the selected radio button value
          const contactByWhatsappValue = Array.from(
            contactByWhatsappInputs
          ).find((input) => input.checked).value;
          // Get the mobile number value
          const mobileNumberValue = mobileNumberInput.value;

          // Prepare the data to be sent
          const formData = {
            Nombre: firstNameInput.value,
            Apellido: lastNameInput.value,
            "Correo electrónico": emailInput.value,
            Consulta: contactTextarea.value,
            contactWhatsapp: contactByWhatsappValue,
          };

          // Include the mobile number if the user selected "Si" and entered a mobile number
          if (contactByWhatsappValue === "si" && mobileNumberValue) {
            formData.mobil = mobileNumberValue;
          }

          // Send data
          fetch("https://formsubmit.co/ajax/costamariaeugenia1@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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
              alert.innerHTML = `<p class="alert alert-danger"> Hubo un error al enviar el formulario</p>`;
              clearAlert();
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
