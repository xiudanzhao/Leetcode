class Solution(object):
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        if len(str) == 0:
            return 0
        #需检查是否合理？
        num=0
        #判断空格连续
        space=True
        #判断只有一个符号位
        b=True
        #判断正负
        positive=True
        for i in str:
            #排除前面都是空格的情况
            if i != ' ':
                space=False
            if i == ' ' and space:
                continue
            #若是通过这个，再含有符号位，就直接退出了
            if b:
                if i == '-':
                    positive=False
                    b=False
                    continue
                elif i == '+':
                    b=False
                    continue
            
            if i >= '0' and i <= '9':
                num=num*10 + int(i)
                
                if num > 2147483647 and positive:
                    return 2147483647
                if num > 2147483648 and not positive:
                        return - 2147483648
            else:
                break
        if positive:
            return num
   
        return -1*num