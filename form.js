document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 使用event作为参数名称

    let formIsValid = true;

    // 清除之前的错误消息
    document.querySelectorAll('.error-message').forEach((elem) => {
        elem.style.display = 'none';
    });

    // 名称验证
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        showError('name', 'Name must be at least 3 characters long.');
        formIsValid = false;
    }

    // 出生年份验证
    const yearOfBirth = document.getElementById('yearOfBirth').value;
    if (!yearOfBirth.match(/^(19|20)\d{2}$/) || yearOfBirth < 1900 || yearOfBirth > 2100) {
        showError('yearOfBirth', 'Year of birth must be between 1900 and 2100.');
        formIsValid = false;
    }

    // 邮政编码验证
    const usResident = document.getElementById('usResident').checked;
    const zipcode = document.getElementById('zipcode').value;
    if (usResident) {
        if (!zipcode.match(/^\d{5}$/)) {
            showError('zipcode', 'Zipcode must be a 5-digit number.');
            formIsValid = false;
        }
    }

    // 密码验证
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters long.');
        formIsValid = false;
    }

    // 喜好的披萨类型验证
    const pizzaPreference = document.getElementById('pizzaPreference').value;
    if (pizzaPreference === "") {
        showError('pizzaPreference', 'You must select a preferred type of pizza.');
        formIsValid = false;
    }

    // 显示表单接受信息或停留在表单上进行更正
    const formResult = document.getElementById('formResult');
    if (formIsValid) {
        formResult.textContent = 'Form Accepted!';
        formResult.style.color = 'green';
    } else {
        formResult.textContent = 'Please correct the errors above.';
        formResult.style.color = 'red';
    }
});

function showError(fieldId, message) {
    const errorSpan = document.querySelector(`#${fieldId}`).parentNode.querySelector('.error-message');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
}
