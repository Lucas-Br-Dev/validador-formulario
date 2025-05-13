const formFunctions = {
    submit: (form) => (e) => {
        e.preventDefault();
        let send = true;
        const inputs = form.querySelectorAll('input');

        formFunctions.clearError();

        for (let i = 0; i < inputs.length; i++) {
            let check = formFunctions.checkInform(inputs[i]);
            if (check !== true) {
                send = false;
            }
        };
        
        if (send) {
            form.submit();
        }    },

    checkInform: (inputActual) => {
        let rules = inputActual.getAttribute('data-rules');

        if (rules !== null) {
            rules = rules.split('|');

            for (let i in rules) {
                let ruleDetails = rules[i].split('=');

                switch (ruleDetails[0]) {
                    case 'required':
                        if (inputActual.value.trim() === '') {
                            formFunctions.showError(inputActual, "Campo Obrigatório");

                            return false;
                        };
                        break;
                    case 'min':
                        const minCharacters = parseInt(ruleDetails[1]);

                        if (inputActual.value.trim().length < minCharacters) {
                            const erro = `Minimo ${minCharacters} Caracteres`;
                            formFunctions.showError(inputActual, erro);

                            return false;
                        };
                        break;
                    case 'email':
                        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if(!regex.test(inputActual.value.toLowerCase())){
                            formFunctions.showError(inputActual, "E-mail inválido");
                            
                            return false;
                        }
                        break;
                };
            };
        };
        return true;
    },

    showError: (element, error) => {
        element.classList.add('border-red-600');
        element.classList.add('bg-red-50');
        element.classList.remove('bg-white');

        let label = element.closest('label');

        let errorEle = document.createElement('div');
        errorEle.classList.add('text-sm');
        errorEle.classList.add('mx-1');
        errorEle.classList.add('bg-red-600');
        errorEle.classList.add('rounded-b-lg');
        errorEle.classList.add('pl-1');
        errorEle.classList.add('text-white');
        errorEle.classList.add('italic');
        errorEle.classList.add('error-message');
        errorEle.innerHTML = error;
        label.appendChild(errorEle);
    },

    clearError: () => {
        const label = document.querySelectorAll('label');
        label.forEach((e) => {
            let existingError = e.querySelectorAll('.error-message');

            if (existingError) {
                existingError.forEach((e) => {
                    e.remove();
                })
            };
        });

        document.querySelectorAll('input').forEach((e) => {
            e.classList.remove('border-red-600');
            e.classList.remove('bg-red-50');
            e.classList.add('bg-white')
        })
    }
};

const formMobile = document.querySelector("#form-mobile");
const formDesktop = document.querySelector("#form-desktop");

formMobile.addEventListener('submit', formFunctions.submit(formMobile));
formDesktop.addEventListener('submit', formFunctions.submit(formDesktop));
