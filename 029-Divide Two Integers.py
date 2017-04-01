class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        isposition = True
        if dividend > 0 and divisor < 0:
        	isposition = False
        if divisor > 0 and dividend < 0:
        	isposition = False
        divisor = abs(divisor)
        dividend = abs(dividend)　
        if divisor > dividend:
        	return 0
        tmp = divisor
        ans = 1
        while dividend >= tmp:
        	tmp <<= 1　　　
        	if dividend < tmp:
        		break
        	ans <<= 1
        tmp >>= 1

        nans = ans + self.divide(dividend - tmp,divisor)
        if isposition:
        	if ans >　2147483647:
        		return 2147483647
        	return nans
        if ans >= 2147483647:
        	return -2147483647
        return 0 - nans