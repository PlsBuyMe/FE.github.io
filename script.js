document
    .getElementById('signupForm')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // 기본 폼 제출 방지

        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        const userData = {
            name: name,
            password: password,
            email: email,
        };

        fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((text) => {
                        throw new Error(text);
                    });
                }
                return response.json();
            })
            .then((data) => {
                document.getElementById('message').innerText =
                    '회원가입이 완료되었습니다';
            })
            .catch((error) => {
                document.getElementById('message').innerText = error.message;
            });
    });
