$(document).ready(() => {
    $('#button').click(function destiny() {
        let name = document.getElementById('name').value.length;
        let age = document.getElementById('age').value;
        const male = document.getElementById('male');
        const female = document.getElementById('female');
        const evenAge = age % 2 === 0;
        const evenName = name % 2 === 0;
        let snap;
        
        if (name === '' || age === '' || male.checked === false && female.checked === false) {
            alert('Please complete all required fields');
            return false;
        } else if (evenName === true && evenAge === true && male.checked === true || 
                evenName === false && evenAge === false && female.checked === true) {
                snap = document.getElementById('snap').src="./Snap.gif";
                $('#fate').delay('1500').fadeOut('10000', 'linear');
                $('#banner').delay('1500').fadeOut('10000', 'linear');
                $('#button').delay('1500').fadeOut('10000', 'linear');
                $('#live').delay('4000').fadeIn('10000', 'linear');
                $('#reset1').delay('4000').fadeIn('10000', 'linear');
                $('.info').delay('1500').fadeOut('10000', 'linear');
                $('#instructions').delay('1500').fadeOut('10000', 'linear');
            } else {
                snap = document.getElementById('snap').src="./Snap.gif";
                $('#fate').delay('1500').fadeOut('10000', 'linear');
                $('#nav').delay('1500').fadeOut('10000', 'linear');
                $('#banner').delay('1500').fadeOut('10000', 'linear');
                $('#button').delay('1500').fadeOut('10000', 'linear');
                $('#die').delay('4000').fadeIn('10000', 'linear');
                $('#reset2').delay('4000').fadeIn('10000', 'linear');
                $('.info').delay('1500').fadeOut('10000', 'linear');
                $('#instructions').delay('1500').fadeOut('10000', 'linear');
            }
        })

    })
