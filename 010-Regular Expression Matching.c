bool isMatch(char* s, char* p) {
    if((p==NULL)||(s==NULL))
        return false;
   if(!*p) return !*s; 
    if(*(p+1)== '*'){
        while((*p == *s)||(*s && *p == '.')){
            if (isMatch(s,p+2))return true;
            s++;
        }
        return isMatch(s,p+2);
    }else if((*p==*s)||(*s && *p=='.')){
        return isMatch(s+1,p+1);
    }
    return false;
    
}