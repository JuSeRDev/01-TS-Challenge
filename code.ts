const button = document.querySelector(".button") as HTMLButtonElement
const cardName = document.getElementById("cardholder-name") as HTMLInputElement
const nameCard = document.querySelector(".name-card") as HTMLParagraphElement

cardName?.addEventListener("input", ()=>{
    let name:string = cardName.value.slice(0, 16)
    nameCard.innerHTML = name || "JANE APPLESSED"
    cardName.value = name
})

const numberCard = document.querySelector(".number-card") as HTMLParagraphElement
const numberInput = document.getElementById("card-number") as HTMLInputElement
const monthCard = document.querySelector(".m") as HTMLParagraphElement
const monthInput = document.querySelector(".mm") as HTMLInputElement
const yearCard = document.querySelector(".y") as HTMLParagraphElement
const yearInput = document.querySelector(".yy") as HTMLInputElement
const cvcCard = document.querySelector(".card-cvc") as HTMLParagraphElement
const cvcInput = document.getElementById("cvc") as HTMLInputElement

const transform = ( inputElement:HTMLInputElement, character:number, print:HTMLElement, start: string)=>{
    inputElement.addEventListener("input", ()=>{
        let input: string = inputElement.value.replace(/\s/g, "")
        input = input.replace(/\D/g, "")
        input = input.slice(0, character)
        let formatted: string = input.match(/.{1,4}/g)?.join(" ") || input
        inputElement.value = formatted
        print.innerHTML = formatted || start
    })
}

transform(numberInput, 16, numberCard, "0000 0000 0000 0000")
transform(monthInput, 2, monthCard, "00")
transform(yearInput, 2, yearCard, "00")
transform(cvcInput, 3, cvcCard, "000")

const errorNumber = document.querySelector(".error-number") as HTMLParagraphElement
const errorDate = document.querySelector(".error-date") as HTMLParagraphElement
const errorCVC = document.querySelector(".error-cvc") as HTMLParagraphElement
const errorActive: string = "error-active"
const colorRed: string = "var(--Red-input-errors)"
const containerConfirm = document.querySelector(".container-confirm") as HTMLDivElement

const validateInput = (input: HTMLInputElement,error: HTMLParagraphElement, count: number, e:MouseEvent): boolean =>{
    if (input.value.length < count) {
        e.preventDefault()
        error.classList.add(errorActive)
        input.style.borderColor = colorRed
        return false
    } else {
        error.classList.remove(errorActive)
        input.style.borderColor = ""
        return true
    }
}


button.addEventListener("click", (e)=>{
    cardName.value.length < 8 ? e.preventDefault() : null
    validateInput(numberInput, errorNumber, 16, e)
    validateInput(monthInput, errorDate, 1, e)
    validateInput(yearInput, errorDate, 2, e)
    validateInput(cvcInput, errorCVC, 3, e)

    !document.querySelector(`.${errorActive}`) ? containerConfirm.style.display = "flex" : null
})

