#include<stdio.h>
#include<stdbool.h>
bool isMatch(char* s, char* p) {
    if((p==NULL)||(s==NULL))
        return false;
    //如果p匹配到最后是空，那么如果s也是空，就返回true，否则就是返回false
    if(!*p) return !*s; 
    if(*(p+1)== '*'){
        while((*p == *s)||(*s && *p == '.')){
            if (isMatch(s,p+2))return true;
            s++;
        }
        return isMatch(s,p+2);
    }else if((*p==*s)||(*s && *p=='.')){
        printf("%c\n",*(s+1));
        printf("%c\n",*(p+1));
        return isMatch(s+1,p+1);
    }
    return false;
    
}
int main(){
    isMatch("aa","aa");
    return 0;
}
