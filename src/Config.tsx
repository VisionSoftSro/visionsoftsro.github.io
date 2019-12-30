import {exist} from "./common/utils/Util";

interface AppConfig {
    companyEmail:string
}

let defaultConfig: AppConfig = {
    companyEmail: "info@vision-soft.cz"
};

export default {...defaultConfig};