const form = document.querySelector('form')

function validateField(field) {
    const error = field.parentElement.querySelector('.error-message')

    if (field.name !== "password-conf") {
        if (!field.validity.valid) {
            error.textContent = `${field.name[0].toUpperCase() + field.name.slice(1)} Required`
            return false
        }
    }

    if (field.name === "password-conf") {
        const passwordValue = form.querySelector('input[name="password"]').value
        if (field.value != passwordValue) {
            field.setCustomValidity('Passwords do not match')
            error.textContent = `Passwords do not match!`
            return false
        } else {
            field.setCustomValidity('')
        }
    }
    
    error.textContent = ''
    return true
}

form.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input)
    })
})

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let isValid = true
    const fields = form.querySelectorAll('input')

    fields.forEach(field => {
        const fieldValid = validateField(field)
        if (!fieldValid) {
            isValid = false
        }
    })

    if (isValid) {
        console.log('done')
    } else {
        console.log('error')
    }
})
