function recebeStrings(string1, string2){
    for(i in string1){
        for(j in string2){
            if(i in string2 && j in string1){
                return true
            }else{
                return false
            }
        }
    }
}