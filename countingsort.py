def countingsort(l,k):
	ans = [0 for i in range(len(l))]
	c = [0 for i in range(k+1)]
	for i in l:
		c[i] += 1
	for i in range(1,len(c)):
		c[i] = c[i-1] + c[i]
	for i in l:
		ans[c[i]-1] = i
		c[i] -= 1
	return ans
if __name__=='__main__':  
    seq=[94,12,34,76,26,9,0,37,55,76,37,5,68,83,90,37,12,65,76,49]  
    ans = countingsort(seq,100)  
    print ans