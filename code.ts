const button = document.querySelector(".button") as HTMLInputElement

const cardName = document.getElementById("cardholder-name") as HTMLInputElement
const nameCard = document.querySelector(".name-card") as HTMLInputElement


cardName?.addEventListener("input", ()=>{
    let name:string = cardName.value.slice(0, 16)
    nameCard!.innerHTML = name || "JANE APPLESSED"
    cardName.value = name
})

const numberCard = document.querySelector(".number-card") as HTMLInputElement
const numberInput = document.getElementById("card-number") as HTMLInputElement

const monthCard = document.querySelector(".m") as HTMLInputElement
const monthInput = document.querySelector(".mm") as HTMLInputElement

const yearCard = document.querySelector(".y") as HTMLInputElement
const yearInput = document.querySelector(".yy") as HTMLInputElement

const cvcCard = document.querySelector(".card-cvc") as HTMLInputElement
const cvcInput = document.getElementById("cvc") as HTMLInputElement

const transform = ( inputElement:HTMLInputElement, character:number, print:HTMLElement, start: string)=>{
    inputElement.addEventListener("input", ()=>{
        let input: string = inputElement.value.replace(/\s/g, "")
        input = input.replace(/\D/g, "")
        input = input.slice(0, character)
        let formatted: string = input.match(/.{1,4}/g)?.join(" ") || input
        inputElement.value = formatted
        print!.innerHTML = formatted || start
    })
}

transform(numberInput, 16, numberCard, "0000 0000 0000 0000")
transform(monthInput, 2, monthCard, "00")
transform(yearInput, 2, yearCard, "00")
transform(cvcInput, 3, cvcCard, "000")


