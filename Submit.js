function checkInput(){
    const firstnamelabel = document.getElementById('firstnameLabelId')
    const firstnameinput = document.getElementById('firstnameInputId').value   

    const Citizenshiplabel = document.getElementById('CitizenshipLabelId')
    const Citizenshipinput = document.getElementById('CitizenshipInputId').value

    const Familynamelabel = document.getElementById('FamilynameLabelId')
    const Familynameinput = document.getElementById('FamilynameInputId').value

    const DateOfBirthlabel = document.getElementById('DateOfBirthLabelId')
    const DateOfBirthinput = document.getElementById('DateOfBirthInputId').value

    const Addresslabel = document.getElementById('AddressLabelId')
    const Addressinput = document.getElementById('AddressInputId').value

    let alerText

    if(!firstnameinput){
        firstnamelabel.style.color = "red"
        alerText = "first name to'ldirilmagan"
    }
    else if (!Citizenshipinput){
        Citizenshiplabel.style.color = "red"
        alerText = "Citizenship to'ldirilmagan"
    }
    else if (!Familynameinput){
        Familynamelabel.style.color = "red"
        alerText = "Family name to'ldirilmagan"
    }
    else if (!DateOfBirthinput){
        DateOfBirthlabel.style.color = "red"
        alerText = "Date Of Birth to'ldirilmagan"
    }
    else if(!Addressinput){
        Addresslabel.style.color = "red"
        alerText = "Address to'ldirilmagan"
    }

    if(alerText){
        alert(alerText)
    }else{
        alert("Siz muofaqqiyatli royxatdan o'tdingiz.")
        location.reload();
       }
    }