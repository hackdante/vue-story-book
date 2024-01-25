import { ref } from "vue"
const showURL = ref<boolean>(false)
export const useCard = () => {
    function goToURL(goURL: string){
        console.log('goURL => ', goURL)
        showURL.value = !showURL.value
    }
    
    return{
        showURL,
        goToURL,
    }
}