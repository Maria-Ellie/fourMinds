import i18next from "i18next";
import {eng} from './en'
import {esp} from './es'

i18next.init({
    interpolation:{
        escapeValue:false
    },
    lng:'es',
    resources:{
        en:{
            translation:eng
        },
        es:{
            translation:esp
        }
    }
})

export default i18next;