const form = document.getElementById('supportForm');
    var fname = localStorage.getItem("firstName");
    var lname = localStorage.getItem("lastName");
    var sex = localStorage.getItem("sex");
    var rec = document.getElementsByClassName("required");


    for(var i = 0; i<rec.length; i++)
    {
        rec[i].style.display = "none";

    }
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        process("fname", "firstName");
        process("lname", "lastName");
        process("email", "Email");
        process("pass", "Password");
        process("cont", "contactnumber");
        process("rsn", "support");
        const sexInputs = document.getElementsByName('sex');
        let selectedSex;
        for (const sexInput of sexInputs) {
            if (sexInput.checked) {
                selectedSex = sexInput.value;
                break;
            }
        }
        checkblnk("fname", "1r");
        checkblnk("lname", "2r");
        checkblnk("email", "4r");
        checkblnk("pass", "5r");
        checkblnk("rsn", "6r");
        if (!isSexSelected()) 
        {
          document.getElementById("3r").style.display = "inline";
          return; 
        }
        else
        {
            document.getElementById("3r").style.display = "none";
            window.location.href = "profile.html";
        }

        localStorage.setItem('sex', getSelectedSex());
        
    });

    document.getElementById("showPassword").addEventListener("change", function() {
        var passwordField = document.getElementById("pass");
        if (this.checked) {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });

    //Hehe proud kayko ani sir, pls sir perfect, for the 4th quarter dl sa group <3 T-T
    function process(id, setname)
    {
        const fromhtml = document.getElementById(id).value;
        const savedval = fromhtml;
        localStorage.setItem(setname, savedval);
    }

    function checkblnk(id, recid)
    {
         const i = document.getElementById(id);
         const ival = i.value.trim();

         if(ival == '')
         {
            document.getElementById(recid).style.display = "inline";
            return;
         }
         else
         {
            document.getElementById(recid).style.display = "none";
         }
    }
    function isSexSelected() {
        const sexInputs = document.getElementsByName('sex');
        for (const sexInput of sexInputs) {
            if (sexInput.checked) {
                return true;
            }
        }
        return false;
    }
    function getSelectedSex() {
        const sexInputs = document.getElementsByName('sex');
        for (const sexInput of sexInputs) {
            if (sexInput.checked) {
                return sexInput.value;
            }
        }
    }



    //for the char
    function fadeFontColor(elementId, colors, duration) {
        let element = document.getElementById(elementId);
        let currentIndex = 0;
    
        function changeColor() {
            element.style.color = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }
    
        setInterval(changeColor, duration);
    }
    const pastelBlues = [
        '#B3D7FF', // Light Blue
        '#88C3FF', // Sky Blue
        '#5DAFFF', // Deep Sky Blue
        '#339BFF', // Dodger Blue
        '#1081E6'  // Cerulean
    ];
    

    fadeFontColor('name',pastelBlues, 1000);