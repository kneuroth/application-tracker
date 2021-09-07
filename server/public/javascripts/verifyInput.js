function verifyPostApplication(application){
    let hasError = false
    let errorString = ""
    if(application.jobName == "" || application.jobName == undefined || application.jobName == null){
        hasError = true
        errorString = errorString + "Job name invalid or incomplete \n"
    }
    if(application.company == "" || application.company == undefined || application.company == null){
        hasError = true
        errorString = errorString + "Company name invalid or incomplete \n"
    }
    if(application.company == "" || application.company == undefined || application.company == null){
        hasError = true
        errorString = errorString +  "Company name invalid or incomplete \n"
    }
    if(application.country == "" || application.country == undefined || application.counrty == null){
        hasError = true
        errorString = errorString + "Country name invalid or incomplete \n"
    }
    if(hasError){
        throw new Error(errorString)
    }
}

module.exports = {verifyPostApplication}