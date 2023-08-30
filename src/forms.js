export default class forms {
    static loadPage(){
        document.getElementById("load-content").appendChild(this.loadForm());
        this.loadEmailValidation();
    }

    static loadForm = () =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <form novalidate>
            <fieldset>
                <label for="first-name">
                    <span>First Name:</span>
                    <input type="text" name="first-name id="first-name" required>
                </label>
                <label for="last-name">
                    <span>Last Name:</span>
                    <input type="text" name="last-name" id="last-name" required>
                </label>
                <label for="country-name">
                    <span>Country:</span>
                    <input type="text" name ="country-name" id="country-name" required>
                </label>
                <p>
                    <label for ="zip-code">
                        <span>Zip code:</span>
                        <input type="text">
                    
                    </label>
                
                </p>
                <p>
                    <label for = "email">
                        <span>Enter email:</span>
                        <input type="email" name="mail" id="mail" required minlength ="8"/>
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>

                <p>
                    <label for="password">
                        <span>Password:</span>
                        <input type="password" name="password" id="password">
                    
                    </label>
                </p>
                <p>
                    <label for ="password-confirmation">
                        <span>Password Confirmation:</span>
                        <input type="password" name="password-confirmation" id="password-confirmation">
                    
                    </label>
                </p>
            
            </fieldset>
            <button>Submit</button>
        
        
        </form>`
        
        return div;
    }
    static loadEmailValidation = ()=>{
        const form = document.querySelector("form");
        const email = document.getElementById("mail");
        const emailError = document.querySelector("#mail + span.error");

        const showError = () =>{
            if (email.validity.valueMissing){
                emailError.textContent= "You need to enter an email address.";
            } else if(email.validity.typeMismatch){
                emailError.textContent = "Enter value needs to be an email address.";
            } else if(email.validity.tooShort){
                emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
            }
        }

        emailError.className = "error active";

        email.addEventListener(("input"), (event) =>{
            if(email.validity.valid){
                emailError.textContent = "";
                emailError.className = "error";
            } else {
                showError();
            }
        });

        form.addEventListener("submit", (event) =>{
            if(!email.validity.valid){
                showError();

                event.preventDefault();
            }
        });
    }


}
